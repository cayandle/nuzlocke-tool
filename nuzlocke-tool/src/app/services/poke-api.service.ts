import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem, ILocation, IOwned, IPlayerOwned, IPokemon, IRegion, IRoute, ITrainer } from '../interfaces';
import { FactoriesService } from './factories.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private pokeAPIurl = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  GetPokemon(pokemon:IPokemon){
    return this.http.get<any>(this.pokeAPIurl+"pokemon/"+pokemon.name);
  }

  GetItem(){

  }

  GetRouteInfo(route:IRoute){
    return this.http.get<any>(this.pokeAPIurl+"location/"+route.name);
  }

  GetRegionInfo(region:IRegion){
    return this.http.get<any>(this.pokeAPIurl+"region/"+region.name);
  }

  BlankSlotSprite(){
    return this.http.get<any>(this.pokeAPIurl+"item/poke-ball");
  }

  GetMove(){

  }

  GetAbility(){

  }
}
