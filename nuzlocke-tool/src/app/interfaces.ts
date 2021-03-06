export interface IPokemon{
    name:string;
    sprite:string;
    EVType:string;
    EVAmount:number;
    possibleMoves:IMove[];
    possibleAbilities:IAbility[];
    evolvable:boolean;
  }

export interface IAbility{
    name:string;
    battleEffect:string;
    outsideEffect:string;
  }

export interface IOwned{
  pokemon:IPokemon;
  level:number;
  heldItem:IItem;
  moves:IMove[];
  ability:IAbility;
}

export interface IPlayerOwned{
  owned:IOwned;
  canEvolve:boolean;
  location:IRoute;
  status:string;
}

export interface IWild{
  pokemon:IPokemon;  
  method:string;
  possibleItems:IItem[];
  possibleLevels:number[];
  odds:number;
  moves:IMove[];
}

export interface IBuyable{
  owned:IOwned;
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
  displayname:string;
  methods:string[];
}

export interface IRoute{
  name:string;
  locations:ILocation[];
  caught:boolean;
  displayname:string;
}

export interface IShop{
  name:string;
  items:IItem[];
  pokemon:IBuyable[];
}

export interface IRegion{
  name:string;
  routes:IRoute[];
}

export interface ITrainer{
  name:string;
  team:IOwned[];
  possibleUsableItems:IItem[];
}

export interface IItem{
  name:string;
  effect:string;
  price:number;
  currency:string;
  TM?:ITM;
}

export interface ITM{
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
  levelLearned:number;
}

export interface IGame{
  name:string;
  regions:IRegion[];
  generation:string;
}

export interface IPlayer{
  name:string;
  team:IPlayerOwned[];
  box:IPlayerOwned[];
  grave:IPlayerOwned[];
  badges:IBadge[];
  tms:ITM[];
  game:IGame;
}