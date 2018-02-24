import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PeopleComponent } from './people/people.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {HttpClientModule} from '@angular/common/http';
// import {ApService} from './ap.service';
// import { AppratesComponent } from './apprates/apprates.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    Page1Component,
    Page2Component,
    PeopleComponent,
    // AppratesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // HttpClientModule,
  ],
  providers: [/*ApService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
