import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

/*
  Generated class for the ProviderJsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderJsonProvider {

  urlApi : string = "http://events.tryapps.tk/api"
  //urlApi : string = "http://customers.vnmas.net";
  //urlApi : string = "http://s98.vnmas.tryapps.tk";
  //urlApi : string = "https://jsonplaceholder.typicode.com/users";

  constructor(public http: HttpClient) {
    console.log('Hello ProviderJsonProvider Provider');
  }

  getInfoCustomer(user_name: string, password: string){

    var body = new FormData();

    body.append("email", user_name);
    body.append("password", password);

    return this.http.post(this.urlApi+"/loginUsers", body);
    
  }

  getItinerarie(){
  	return this.http.get(this.urlApi+"/listItineraries");
  }

}
