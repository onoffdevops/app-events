import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { ProviderJsonProvider } from '../../providers/provider-json/provider-json';

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})

export class DetailPage {

    info_customer
    info_detail
    info_payments_detail
    last_payment
    amount
    payments
    fees_paids
    payments_pending
    fees_pendings
  
    constructor(public navCtrl: NavController, 
                public navParm: NavParams,
                public provider: ProviderJsonProvider,
                public alertCtrl: AlertController,
                private platform: Platform) 
    {
        this.info_customer = navParm.get('info_customer');
        this.info_detail = navParm.get('info_loan_detail');
        this.info_payments_detail = navParm.get('info_payments');
        this.last_payment = this.info_payments_detail[0];
        this.valuesFormat();
    }

    ionViewDidEnter()
    {
        this.provider.getPayments(this.info_customer.idCustomer, 
            this.info_detail.idLoan, 
            this.info_customer.Partner)
        .subscribe(
        (data) => {
            this.info_payments_detail = data;
            this.last_payment = this.info_payments_detail[0];
            this.valuesFormat(); 
        },

        (err)=> {
            console.log("error " + err);
        }
        );        
    }

    getLoanPercentage(loan)
    {
        console.log(this.fees_paids);
        console.log(this.info_detail.numberOfPayment);
        return (this.fees_paids * 100 / this.info_detail.numberOfPayment) + "%";
      }

    valuesFormat ()
    {
        this.amount = new Intl.NumberFormat().format(this.info_detail.amount);
        this.payments = new Intl.NumberFormat().format(this.last_payment.sumAmountPayment);
        this.fees_paids = new Intl.NumberFormat().format(this.last_payment.sumNumPayments);
        this.payments_pending = new Intl.NumberFormat().format(this.last_payment.Balance);
        this.fees_pendings = new Intl.NumberFormat().format(this.last_payment.pendingNumPayments);
    }

    ionViewCanEnter ()
    {
        this.platform.ready().then( ()=> {
        this.platform.registerBackButtonAction( ()=> {
            this.backButtonControl();
        })
        });​
        
    }

    backButtonControl()
    {
        this.navCtrl.pop();
    }

}