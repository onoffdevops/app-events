import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { ProviderJsonProvider } from '../../providers/provider-json/provider-json';

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})

export class DetailPage {

    itinerario
  
    constructor(public navCtrl: NavController, 
                public navParm: NavParams,
                public provider: ProviderJsonProvider,
                public alertCtrl: AlertController,
                private platform: Platform) 
    {
        this.itinerario = navParm.get('info_tinerarie');
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