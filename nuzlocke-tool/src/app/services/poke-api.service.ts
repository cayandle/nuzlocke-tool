import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem, IPlayerOwned, IPokemon } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  slot:string="";

  private url = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  GetPokemon(){

  }

  GetItem(){

  }

  GetLocation(){

  }

  GetRoute(){

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
