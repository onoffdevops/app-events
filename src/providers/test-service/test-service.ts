import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestServiceProvider {

	urlApi : string = "https://jsonplaceholder.typicode.com/users";

  constructor(public http: HttpClient) {
    console.log('Hello TestServiceProvider Provider');
  }

  getInfoCustomer(user_name: string, password: string){
  	return this.http.get(this.urlApi);
  }

  getPayments(id_customer: string, id_loan: string, partner: string){
  	return this.http.get(this.urlApi+"/LoansPayments/"+id_customer+"/"+id_loan+"/"+partner);
  	//return "";
  }

  getCustomerData(data){
  	data.fullName = "CARLOS MARIO OCAMPO";
  	data.idCustomer = "12345";
  	data.phone = "31245678";
  	data.document = "12345678";
  	data.lstLoans = [
			{
				"idLoan" : 12,
				"amount" : 4000,
				"dateLoan" : "2018-10-15",
				"daysDue" : 10,
			},
			{
				"idLoan" : 13,
				"amount" : 5000,
				"dateLoan" : "2018-10-18",
				"daysDue" : 9,
			}
		];
  }

}
