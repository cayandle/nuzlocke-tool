import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAbility, IItem, ILocation, IMove, IOwned, IPlayerOwned, IPokemon, IRegion, IRoute, ITrainer } from '../interfaces';
import { FactoriesService } from './factories.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private pokeAPIurl = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  GetPokemon(pokemon:string){
    return this.http.get<any>(this.pokeAPIurl+"pokemon/"+pokemon);
  }

  GetItem(item:string){
    return this.http.get<any>(this.pokeAPIurl+"item/"+item);
  }

  GetRoute(route:string){
    return this.http.get<any>(this.pokeAPIurl+"location/"+route);
  }

  GetRegion(region:string){
    return this.http.get<any>(this.pokeAPIurl+"region/"+region);
  }

  BlankSlotSprite(){
    return this.http.get<any>(this.pokeAPIurl+"item/poke-ball");
  }

  GetMove(move:string){
    return this.http.get<any>(this.pokeAPIurl+"move/"+move);
  }

  GetAbility(ability:string){
    return this.http.get<any>(this.pokeAPIurl+"ability/"+ability);
  }

  GetWildEncounters(location:string){
    return this.http.get<any>(this.pokeAPIurl+"location-area/"+location);
  }
}
