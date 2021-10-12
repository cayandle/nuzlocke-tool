import { Injectable } from '@angular/core';
import { IPokemon, IMove, IAbility, IItem, IPlayerOwned, IGame } from '../interfaces';
import { FactoriesService } from './factories.service';
import { PokeAPIService } from './poke-api.service';

@Injectable({
  providedIn: 'root'
})
export class GamestateService {

  team:IPlayerOwned[] = new Array(6);
  box:IPlayerOwned[] = new Array();
  grave:IPlayerOwned[] = new Array();
  game:IGame;
  
  constructor(factory:FactoriesService) {
    this.game = factory.GameFactory();
   }
}
