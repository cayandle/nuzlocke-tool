import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem, IPlayerOwned, IPokemon, IRoute } from '../interfaces';
import { FactoriesService } from './factories.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  slot:string="";

  private url = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient, private factory:FactoriesService) { }

  GetPokemon(){

  }

  GetItem(){

  }

  GetLocation(route:string){

  }

  GetRoute(region:string){
    let routeObj = {name:""};
    let routeNames:IRoute[] = [];
    let routeSub = this.http.get<any>(this.url+"region/"+region).subscribe(result =>
      {for(let i = 0; i < result.locations.length; i++){
        routeObj = result.locations[i];
        routeNames.push(this.factory.RouteFactory());
        routeNames[i].name = routeObj.name;
      }}
      );
      routeSub.unsubscribe;
    return routeNames;
  }

  GetBlankSlot(){
    this.http.get<any>(this.url+"item/poke-ball").subscribe(result => this.slot = result.sprites.default);
    console.log(this.slot);
    return this.slot;
  }

  GetMove(){

  }

  GetAbility(){

  }
}
