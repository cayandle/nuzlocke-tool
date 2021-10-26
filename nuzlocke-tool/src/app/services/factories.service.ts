import { Injectable } from '@angular/core';
import { IPokemon, IMove, IAbility, IItem, IOwned, ITrainer, ITM, ILocation, IShop, IBadge, IRoute, IPlayerOwned, IWild, IBuyable, IRegion, IGame, IPlayer } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FactoriesService {

  constructor() { }

  MoveFactory(){
    let move:IMove = {name:"",type:"",power:0,accuracy:0,mainEffect:"",secondaryEffect:"",secondaryEffectChance:0,pp:0,isPhysical:true,levelLearned:0}
    return move;
  }

  AbilityFactory(){
    let ability:IAbility = {name:"",battleEffect:"",outsideEffect:""}
    return ability;
  }

  ItemFactory(){
    let item:IItem = {name:"",effect:"",price:0,currency:""}
    return item;
  }

  PokemonFactory(){
    let pokemon:IPokemon = {name:"",sprite:"",EVType:"",EVAmount:0,possibleMoves:[],possibleAbilities:[],evolvable:false}
    return pokemon;
  }

  RouteFactory(){
    let route:IRoute = {name:"",locations:[],caught:false, displayname:""}
    return route;
  }

  OwnedFactory(){
    let owned:IOwned = {pokemon:this.PokemonFactory(),level:0,heldItem:this.ItemFactory(),moves:[],ability:this.AbilityFactory()}
    return owned;
  }

  PlayerOwnedFactory(){
    let playerOwned:IPlayerOwned = {owned:this.OwnedFactory(),canEvolve:true,location:this.RouteFactory(),status:""}
    return playerOwned;
  }

  WildFactory(){
    let wild:IWild = {pokemon:this.PokemonFactory(),method:"",possibleLevels:[],odds:0,moves:[],possibleItems:[]}
    return wild;
  }

  BuyableFactory(){
    let buy:IBuyable = {owned:this.OwnedFactory(),price:0,currency:""}
    return buy;
  }

  BadgeFactory(){
    let badge:IBadge = {name:"",sprite:"",aceLevel:0}
    return badge;
  }

  LocationFactory(){
    let location:ILocation = {name:"",encounters:[],trainers:[],items:[],shops:[], displayname:"", methods:[]}
    return location;
  }

  ShopFactory(){
    let shop:IShop = {name:"",items:[],pokemon:[]}
    return shop;
  }

  RegionFactory(){
    let region:IRegion = {name:"",routes:[]}
    return region;
  }

  TrainerFactory(){
    let trainer:ITrainer = {name:"",team:[],possibleUsableItems:[]}
    return trainer;
  }

  TMFactory(){
    let TM:ITM = {number:0,move:this.MoveFactory()}
    return TM;
  }

  GameFactory(){
    let game:IGame = {name:"",regions:[],generation:""}
    return game;
  }

  PlayerFactory(){
    let player:IPlayer = {name:"",team:[],box:[],grave:[],badges:[],tms:[],game:this.GameFactory()}
    return player;
  }
}