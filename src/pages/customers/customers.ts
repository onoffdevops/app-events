import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Navbar, Platform} from 'ionic-angular';
import { ProviderJsonProvider } from '../../providers/provider-json/provider-json';
import { TestServiceProvider } from '../../providers/test-service/test-service';
import { DetailPage } from '../detail/detail';
import { ViewChild } from '@angular/core'; 

@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html'
})

export class CustomersPage {
  @ViewChild (Navbar) navBar : Navbar;

  username
  password
  customerData
  info_payments

  constructor(public navCtrl: NavController, 
              public provider:ProviderJsonProvider, 
              public navParm: NavParams,
              public alertCtrl: AlertController,
              private platform: Platform) 
  {
    this.username = navParm.get('username');
    this.password = navParm.get('password');
    this.customerData = navParm.get('info_data');      
  }

  getLoanPercentage(loan)
  {
    return (loan.totNumPayments * 100 / loan.numberOfPayment) + "%";
  }

  loadPayments(id_customer, id_loan, info_loan_detail, id_partner)
  {
  	this.provider.getPayments(id_customer, id_loan, id_partner)
  	.subscribe(
  		(data)=> {
        this.info_payments = data;        
        this.launchDetail(info_loan_detail);
      }
    );
      (error)=> {
        console.log(error);
      }
  }

  launchDetail(info_loan_detail)
  {
    this.navCtrl.push(DetailPage, {info_loan_detail: info_loan_detail, info_customer: this.customerData, info_payments: this.info_payments});
  }

  ionViewCanEnter ()
  {
    this.navBar.backButtonClick = () => {
      let alert = this.alertCtrl.create({
        title: 'Alerta',
        subTitle: 'Presione confirmar para salir de la aplicación.',
        buttons: [
          { 
            text: 'Cancelar',             
          }, 
          { 
            text: 'Confirmar', 
            handler:() => { 
            this.navCtrl.pop();
            }, 
          },
        ]
      });
      alert.present(); 
    };

    this.platform.ready().then( ()=> {
      this.platform.registerBackButtonAction( ()=> {
        this.backButtonControl();
      })
    });​
      
  }

  ionViewDidEnter()
  {
    this.provider.getInfoCustomer(this.username, 
        this.password)
    .subscribe(
    (data) => {
        this.customerData = data;
    },

    (err)=> {
        console.log("error " + err);
    }
    );        
}

  backButtonControl()
  {
    let alert = this.alertCtrl.create({
      title: 'Alerta',
      subTitle: 'Presione confirmar para salir de la aplicación.',
      buttons: [
        { 
          text: 'Cancelar',             
        }, 
        { 
          text: 'Confirmar', 
          handler:() => { 
            this.navCtrl.pop();
          }, 
        },
      ]
    });
    alert.present(); 
  }
}