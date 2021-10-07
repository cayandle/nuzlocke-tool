import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { BoxComponent } from './box/box.component';
import { GraveComponent } from './grave/grave.component';
import { MapComponent } from './map/map.component';
import { RouteComponent } from './route/route.component';
import { BadgesComponent } from './badges/badges.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button'; 
import { MatSliderModule} from '@angular/material/slider'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    BoxComponent,
    GraveComponent,
    MapComponent,
    RouteComponent,
    BadgesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
