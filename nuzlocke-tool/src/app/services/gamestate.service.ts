import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPokemon, IMove, IAbility, IItem, IPlayerOwned, IGame, IRegion } from '../interfaces';
import { FactoriesService } from './factories.service';
import { PokeAPIService } from './poke-api.service';

@Injectable({
  providedIn: 'root'
})
export class GamestateService {


  team: BehaviorSubject<IPlayerOwned[]> = new BehaviorSubject<IPlayerOwned[]>([]);
  box:IPlayerOwned[] = new Array();
  grave:IPlayerOwned[] = new Array();
  
  game:IGame;
  
  constructor(private factory:FactoriesService, private pokeapi:PokeAPIService) {
    this.game = this.factory.GameFactory();
    this.InitializeTeam();
   }

  InitializeTeam(){
    let firstTeam:IPlayerOwned[] = [];
    this.pokeapi.GetBlankSlots();
    for(let j = 0; j < 6; j++){
      firstTeam.push(this.factory.PlayerOwnedFactory());
    }
    let blankSub = this.pokeapi.teamSprites.subscribe((result)=>{
      for(let i = 0; i < 6; i++){
        firstTeam[i].owned.pokemon.sprite = result[i];
      }
      this.team.next(firstTeam);
    });
  }

  GetRoutes(){
    for(let i = 0; i < this.game.regions.length; i++){
      this.pokeapi.GetRoutes(this.game.regions[i].name);
      for(let j = 0; j < this.pokeapi.routeNames.value.length; j++){
        this.game.regions[i].routes[j].name = this.pokeapi.routeNames.value[j];
      }
    }
  }
}
