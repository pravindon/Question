import { Component } from '@angular/core';
import { JavascriptComponent } from './layout/javascript/javascript.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Question-Bank';
  panelOpenState = false;
}
