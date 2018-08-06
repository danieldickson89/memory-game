import { Component } from '@angular/core';
import { CARDS } from './cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Memory Game';
  cards = CARDS;
}
