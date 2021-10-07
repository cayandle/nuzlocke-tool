export interface IPokemon{
    name:string;
    sprite:string;
    EVType:string;
    EVAmount:number;
    possibleItems:IItem[];
    possibleMoves:IMove[];
  }

export interface IOwned{
  pokemon:IPokemon;
  canEvolve:boolean;
  location:IRoute;
  status:string;
  level:number;
  heldItem:IItem;
  moves:IMove[];
}

export interface IWild{
  name:IPokemon;  
  method:string;
  possibleLevels:number[];
  odds:number;
  moves:IMove[];
}

export interface IBuyable{
  pokemon:IPokemon;
  price:number;
  currency:string;
}

export interface IBadge{
  name:string;
  sprite:string;
  aceLevel:number;
}

export interface ILocation{
  name:string;
  encounters:IWild[];
  trainers:ITrainer[];
  items:IItem[];
  shops:IShop[];
}

export interface IRoute{
  name:string;
  locations:ILocation[];
}

export interface IShop{
  name:string;
  items:IItem[];
  TMs:ITM[];
  pokemon:IBuyable[];
}

export interface IRegion{
  name:string;
  routes:IRoute[];
  game:string;
}

export interface ITrainer{
  team:IOwned[];
  reward:number;
  possibleUsableItems:IItem[];
}

export interface IItem{
  name:string;
  effect:string;
  price:number;
  currency:string;
}

export interface ITM{
  name:string;
  number:number;
  move:IMove;
}

export interface IMove{
  name:string;
  type:string;
  power:number;
  accuracy:number;
  mainEffect:string;
  secondaryEffect:string;
  secondaryEffectChance:number;
  pp:number;
  isPhysical:boolean;
}