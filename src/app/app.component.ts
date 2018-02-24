import {Component} from '@angular/core';
import {Person} from './Classes/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*code;
  counter = 0;

  setPage(x) {
    this.code = x;
    this.counter++;
  }*/

  constructor() {
    console.log(Person.randomArray(10));
  }
}
