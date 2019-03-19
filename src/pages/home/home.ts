import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomersPage } from '../customers/customers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  launchCustomers(){
  	this.navCtrl.push(CustomersPage);
  }

}
