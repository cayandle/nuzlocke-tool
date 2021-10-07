import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { IPokemon } from '../interfaces';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  members:IPokemon[] = new Array(6);
  value:number = 150;

  constructor() { }

  ngOnInit(): void {
    this.members=new Array(6);
    for (let i = 0; i < this.members.length; i++) {
      this.members[i] = {name:"", sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png", loc:"",status:""};
      // this.members[i] = {name:"", sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png", loc:"",status:""};
    }
    this.value=150;
    this.members[0].sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";
  }

  onSlide(event:MatSliderChange){
    if(event.value){
    this.value = event.value;
    }
  }

}
