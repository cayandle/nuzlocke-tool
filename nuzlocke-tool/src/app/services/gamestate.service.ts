import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPokemon, IMove, IAbility, IItem, IPlayerOwned, IGame, IRegion, IRoute, ILocation, IWild } from '../interfaces';
import { FactoriesService } from './factories.service';
import { PokeAPIService } from './poke-api.service';

@Injectable({
  providedIn: 'root'
})
export class GamestateService {


  team: BehaviorSubject<IPlayerOwned[]> = new BehaviorSubject<IPlayerOwned[]>([]);
  box:IPlayerOwned[] = new Array();
  grave:IPlayerOwned[] = new Array();
  routes: BehaviorSubject<IRoute[]> = new BehaviorSubject<IRoute[]>([]);
  locations: BehaviorSubject<ILocation[]> = new BehaviorSubject<ILocation[]>([]);
  wildPokemon: BehaviorSubject<IWild[]> = new BehaviorSubject<IWild[]>([]);
  
  game:IGame;
  
  constructor(private factory:FactoriesService, private pokeapi:PokeAPIService) {
    this.game = this.factory.GameFactory();
    this.InitializeTeam();
   }

  InitializeTeam(){
    let firstTeam:IPlayerOwned[] = [];
    for(let j = 0; j < 6; j++){
      firstTeam.push(this.factory.PlayerOwnedFactory());
    }
    let blankSub = this.pokeapi.BlankSlotSprite().subscribe((result)=>{
      for(let i = 0; i < 6; i++){
        firstTeam[i].owned.pokemon.sprite = result.sprites.default;
      }
      this.team.next(firstTeam);
    });
    blankSub.unsubscribe;
  }

  GetRoutes(){
    let routes:IRoute[] = [];
    for(let i = 0; i < this.game.regions.length; i++){
      this.pokeapi.GetRegion(this.game.regions[i].name).subscribe((result)=>{
        result.locations.forEach((element:any) => {
          let route:IRoute = this.factory.RouteFactory();
          route.name = element.name;
          routes.push(route);
        });
        this.routes.next(routes);
      });
    }
  }

  GetLocations(route:string){
    this.pokeapi.GetRoute(route).subscribe((result) => {
      let locations:ILocation[] = [];
      result.areas.forEach((element:any) => {
        let location:ILocation = this.factory.LocationFactory();
        location.name = element.name;
        locations.push(location);
      });
      this.locations.next(locations);
    });
  }

  GetWildEncounters(location:string){
    this.pokeapi.GetWildEncounters(location).subscribe((result) => {
      let encounters:IWild[] = [];
      result.pokemon_encounters.forEach((element:any) => {
        let pokemon:IWild = this.factory.WildFactory();
        pokemon.pokemon.name = element.pokemon.name;
        encounters.push(pokemon);
      });
      this.wildPokemon.next(encounters);
    });
  }
}
