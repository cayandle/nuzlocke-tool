import { Component, OnInit } from '@angular/core';
import { IGame } from '../interfaces';
import { FactoriesService } from '../services/factories.service';
import { GamestateService } from '../services/gamestate.service';

@Component({
  selector: 'app-gen-select',
  templateUrl: './gen-select.component.html',
  styleUrls: ['./gen-select.component.scss']
})
export class GenSelectComponent implements OnInit {

  games: string[] = [
    'Red',
    'Blue',
    'Yellow',
    'Gold',
    'Silver',
    'Crystal',
    'Ruby',
    'Sapphire',
    'Emerald',
    'FireRed',
    'LeafGreen',
    'Diamond',
    'Pearl',
    'Platinum',
    'HeartGold',
    'SoulSilver',
    'Black',
    'White',
    'Black 2',
    'White 2',
    'X',
    'Y',
    'Omega Ruby',
    'Alpha Sapphire',
    'Sun',
    'Moon',
    'Ultra Sun',
    'Ultra Moon',
    "Let's Go, Pikachu",
    "Let's Go, Eevee",
    'Sword',
    'Shield'
  ];

  choice:string="";


  constructor(private factory:FactoriesService, private game:GamestateService) {
   }

  ngOnInit(): void {
  }

  SetGame(game:string){
    this.game.game.name=game;
    console.log(game);
  }

}
