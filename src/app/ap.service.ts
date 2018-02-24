import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApService {

  url = 'http://api.fixer.io/latest';

  constructor(private http: HttpClient) {
  }

  getAP() {
    return this.http.get(this.url).map((res: any) => {
      res.rates[res.base] = 1;
      return res;
    });
    /*est' metod POst , return pustoi stakan Deferred object
    * dobavili ewe Eur v spisok*/
  }

}
