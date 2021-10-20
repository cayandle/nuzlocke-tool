import { Component, OnInit } from '@angular/core';
import { IRegion, IRoute } from '../interfaces';
import { GamestateService } from '../services/gamestate.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapImage:string = "";
  regions:IRegion[] = [];

  constructor(private gamestate:GamestateService) { }

  ngOnInit(): void {
    this.regions = this.gamestate.game.regions;
    for(let i = 0; i < this.regions.length; i++){
      this.gamestate.GetRoutes();
    }
  }

  

}
