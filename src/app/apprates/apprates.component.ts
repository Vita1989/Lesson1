import {Component, OnInit} from '@angular/core';
import {ApService} from '../ap.service';

@Component({
  selector: 'app-apprates',
  templateUrl: './apprates.component.html',
  styleUrls: ['./apprates.component.css']
})
export class AppratesComponent implements OnInit {
  curr = ['USD', 'EUR', 'CNY', 'ILS', 'RUB'];
  rates;
  loaded;

  constructor(private ap: ApService) {
  }

  ngOnInit() {
    this.ap.getAP().subscribe((res) => {
      this.rates = res.rates;
      // this.loaded = true;
      setInterval(() => { this.loaded = true; }, 1000);
    });
  }

}
