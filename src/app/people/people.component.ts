import { Component, OnInit } from '@angular/core';
import {Person} from '../Classes/Person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people; /*array of Objects*/
  fd;
  fields;
  constructor() { }

  ngOnInit() {
    this.people = Person.randomArray(10);
    this.fd = Person.fieldsDescriptor;
    this.fields = Object.keys(this.fd); /*array names of fields id, name, age*/
  }

}
