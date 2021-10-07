import { Injectable } from '@angular/core';
import { IPokemon } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GamestateService {

  team:IPokemon[] = new Array(6);
  box:IPokemon[] = new Array();
  grave:IPokemon[] = new Array();

  constructor() { }
}
