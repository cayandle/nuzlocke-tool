import { Injectable } from '@angular/core';
import { IPokemon, IMove, IAbility, IItem, IPlayerOwned } from '../interfaces';
import { FactoriesService } from './factories.service';
import { PokeAPIService } from './poke-api.service';

@Injectable({
  providedIn: 'root'
})
export class GamestateService {

  team:IPlayerOwned[] = new Array(6);
  box:IPlayerOwned[] = new Array();
  grave:IPlayerOwned[] = new Array();
  
  constructor(private factory:FactoriesService, private pokeapi:PokeAPIService) {
    this.InitializeBlankTeam();
   }

   InitializeBlankTeam(){
    for (let i = 0; i<this.team.length; i++){
      this.team[i] = this.factory.PlayerOwnedFactory();
      this.team[i].owned.pokemon.sprite = this.pokeapi.GetBlankSlot();
      console.log(this.team[i].owned.pokemon.sprite);
    };
   }
}
