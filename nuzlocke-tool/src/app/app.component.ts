import { Component } from '@angular/core';
import { GamestateService } from './services/gamestate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nuzlocke-tool';

  constructor(){  }
}
