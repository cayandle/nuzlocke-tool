import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRegion, IRoute } from '../interfaces';
import { GamestateService } from '../services/gamestate.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapImage:string = "";
  routes:IRoute[] = [];

  constructor(private gamestate:GamestateService, private router:Router) { }

  ngOnInit(): void {
    this.gamestate.routes.subscribe(result => this.routes = result);
    this.gamestate.GetRoutes();
  }

  SelectRoute(route:string){
    this.gamestate.GetLocations(route);
    this.router.navigate(["/route"]);
  }

  

}
