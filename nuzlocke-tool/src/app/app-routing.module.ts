import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { GenSelectComponent } from './gen-select/gen-select.component';
import { GraveComponent } from './grave/grave.component';
import { MapComponent } from './map/map.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
{
  path:'team',
  component:TeamComponent
},
{
  path:'box',
  component:BoxComponent
},
{
  path:'grave',
  component:GraveComponent
},
{
  path:'map',
  component:MapComponent
},
{
  path:'game',
  component:GenSelectComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
