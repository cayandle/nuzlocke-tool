import { Component, OnInit } from '@angular/core';
import { IGame, IRegion, IRoute } from '../interfaces';
import { FactoriesService } from '../services/factories.service';
import { GamestateService } from '../services/gamestate.service';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-gen-select',
  templateUrl: './gen-select.component.html',
  styleUrls: ['./gen-select.component.scss']
})
export class GenSelectComponent implements OnInit {

  games: IGame[] = [
    {name:"Red",regions:[], generation:"generation-i"},
    {name:"Blue",regions:[], generation:"generation-i"},
    {name:"Yellow",regions:[], generation:"generation-i"},
    {name:"Gold",regions:[], generation:"generation-ii"},
    {name:"Silver",regions:[], generation:"generation-ii"},
    {name:"Crystal",regions:[], generation:"generation-ii"},
    {name:"Ruby",regions:[], generation:"generation-iii"},
    {name:"Sapphire",regions:[], generation:"generation-iii"},
    {name:"Emerald",regions:[], generation:"generation-iii"},
    {name:"FireRed",regions:[], generation:"generation-iii"},
    {name:"LeafGreen",regions:[], generation:"generation-iii"},
    {name:"Diamond",regions:[], generation:"generation-iv"},
    {name:"Pearl",regions:[], generation:"generation-iv"},
    {name:"Platinum",regions:[], generation:"generation-iv"},
    {name:"HeartGold",regions:[], generation:"generation-iv"},
    {name:"SoulSilver",regions:[], generation:"generation-iv"},
    {name:"Black",regions:[], generation:"generation-v"},
    {name:"White",regions:[], generation:"generation-v"},
    {name:"Black 2",regions:[], generation:"generation-v"},
    {name:"White 2",regions:[], generation:"generation-v"},
    {name:"X",regions:[], generation:"generation-vi"},
    {name:"Y",regions:[], generation:"generation-vi"},
    {name:"Omega Ruby",regions:[], generation:"generation-vi"},
    {name:"Alpha Sapphire",regions:[], generation:"generation-vi"},
    {name:"Sun",regions:[], generation:"generation-vii"},
    {name:"Moon",regions:[], generation:"generation-vii"},
    {name:"Ultra Sun",regions:[], generation:"generation-vii"},
    {name:"Ultra Moon",regions:[], generation:"generation-vii"},
    {name:"Let's Go, Pikachu",regions:[], generation:"generation-vii"},
    {name:"Let's Go, Eevee",regions:[], generation:"generation-vii"},
    {name:"Sword",regions:[], generation:"generation-viii"},
    {name:"Shield",regions:[], generation:"generation-viii"}
  ];

  choice:IGame;

  constructor(private factory:FactoriesService, private game:GamestateService, private pokeapi:PokeAPIService) {
    this.choice = this.factory.GameFactory();
   }

  ngOnInit(): void {
  }

  SetGame(game:IGame){
    game.regions = [];
    game.regions.push(this.factory.RegionFactory());
    switch (game.name) {
      case "Red":
      case "Blue":
      case "Yellow":
        game.regions[0].name = "kanto";
        break;
      case "Gold":
      case "Silver":
      case "Crystal":
        game.regions[0].name = "johto";
        game.regions.push(this.factory.RegionFactory());
        game.regions[1].name = "kanto";
        break;
      case "Ruby":
      case "Sapphire":
      case "Emerald":
        game.regions[0].name = "hoenn";
        break;
      case "FireRed":
      case "LeafGreen":
        game.regions[0].name = "kanto";
        break;
      case "Diamond":
      case "Pearl":
      case "Platinum":
        game.regions[0].name = "sinnoh";
        break;
      case "HeartGold":
      case "SoulSilver":
        game.regions[0].name = "johto";
        game.regions.push(this.factory.RegionFactory());
        game.regions[1].name = "kanto";
        break;
      case "Black":
      case "White":
      case "Black 2":
      case "White 2":
        game.regions[0].name = "unova";
        break;
      case "X":
      case "Y":
        game.regions[0].name = "kalos";
        break;
      case "Omega Ruby":
      case "Alpha Sapphire":
        game.regions[0].name = "hoenn";
        break;
      case "Sun":
      case "Moon":
      case "Ultra Sun":
      case "Ultra Moon":
        game.regions[0].name = "alola";
        break;
      case "Let's Go, Pikachu":
      case "Let's Go, Eevee":
        game.regions[0].name = "kanto";
        break;
      case "Sword":
      case "Shield":
        game.regions[0].name = "galar";
        break;
      default:
        break;
    }
    for(let i = 0; i < game.regions.length; i++){
      game.regions[i].routes = this.pokeapi.GetRoute(game.regions[i].name);
    }
    this.game.game=game;
    console.log(this.game.game);
  }

}
