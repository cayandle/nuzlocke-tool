import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { IOwned, IPokemon } from '../interfaces';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  members:IOwned[] = new Array(6);
  value:number = 150;

  constructor() { }

  ngOnInit(): void {
  }

  onSlide(event:MatSliderChange){
    if(event.value){
    this.value = event.value;
    }
  }

}
