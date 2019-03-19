import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProviderJsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderJsonProvider {

  urlApi : string = "http://customers.vnmas.net";
  //urlApi : string = "http://s98.vnmas.tryapps.tk";
  //urlApi : string = "https://jsonplaceholder.typicode.com/users";

  constructor(public http: HttpClient) {
    console.log('Hello ProviderJsonProvider Provider');
  }

  getInfoCustomer(user_name: string, password: string){
  	return this.http.get(this.urlApi+"/CustomerLogin/"+user_name+"/"+password);
  }

  getPayments(id_customer: string, id_loan: string, partner: string){
  	return this.http.get(this.urlApi+"/LoansPayments/"+id_customer+"/"+id_loan+"/"+partner);
  }

}
