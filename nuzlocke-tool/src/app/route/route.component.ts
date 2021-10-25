import { Component, OnInit } from '@angular/core';
import { ILocation, IWild } from '../interfaces';
import { GamestateService } from '../services/gamestate.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  locations:ILocation[] = [];
  encounters:IWild[] = [];

  constructor(private gamestate:GamestateService) { }

  ngOnInit(): void {
    this.gamestate.locations.subscribe(result => this.locations = result);
    this.gamestate.wildPokemon.subscribe(result => this.encounters = result);
  }

  GetLocationInfo(location:string){
    this.gamestate.GetWildEncounters(location);
  }

}
