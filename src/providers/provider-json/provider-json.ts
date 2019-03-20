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

  postComments(user_id: string, application: string, suggestion: string){

    var body = new FormData();

    body.append("application", application);
    body.append("suggestion", suggestion);
    body.append("user_id", user_id);

    return this.http.post(this.urlApi+"/saveSuggestions", body);
    
  }

  postRegister(name: string, cellphone: string, email: string, password: string,
    contact_name: string, contact_phone: string, contact_kin: string){

    var body = new FormData();

    body.append("name", name);
    body.append("cellphone", cellphone);
    body.append("email", email);
    body.append("password", password);
    body.append("contact_name", contact_name);
    body.append("contact_phone", contact_phone);
    body.append("contact_kin", contact_kin);

    return this.http.post(this.urlApi+"/createUsers", body);
    
  }

  getItinerarie(){
  	return this.http.get(this.urlApi+"/listItineraries");
  }

}
