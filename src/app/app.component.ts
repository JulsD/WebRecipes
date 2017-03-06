import { Component, ViewEncapsulation } from '@angular/core';
import '../assets/scss/styles.scss';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [ require('./app.component.scss') ]
})
export class AppComponent { }
