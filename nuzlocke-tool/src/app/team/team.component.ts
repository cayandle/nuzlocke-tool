import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { IOwned, IPlayerOwned, IPokemon } from '../interfaces';
import { FactoriesService } from '../services/factories.service';
import { GamestateService } from '../services/gamestate.service';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  members:IPlayerOwned[] = new Array(6);
  value:number = 150;

  constructor(private game:GamestateService) { }

  ngOnInit(): void {
    this.members = this.game.team;
    console.log(this.members[0].owned.pokemon.sprite);
  }

  onSlide(event:MatSliderChange){
    if(event.value){
    this.value = event.value;
    }
  }

}
