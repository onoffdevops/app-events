import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Navbar, Platform} from 'ionic-angular';
import { ProviderJsonProvider } from '../../providers/provider-json/provider-json';
import { TestServiceProvider } from '../../providers/test-service/test-service';
import { DetailPage } from '../detail/detail';
import { ViewChild } from '@angular/core'; 
import { CommentsPage } from '../comments/comments';

@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html'
})

export class CustomersPage {
  @ViewChild (Navbar) navBar : Navbar;

  info_data

  constructor(public navCtrl: NavController, 
              public provider:ProviderJsonProvider, 
              public navParm: NavParams,
              public alertCtrl: AlertController,
              private platform: Platform) 
  {
    this.info_data = navParm.get('info_data');      
  }

  loadItinirarie()
  {
  	this.provider.getItinerarie()
  	.subscribe(
  		(data)=> {   
        console.log(data);  
        this.launchItinerie(data);
      }
    );
      (error)=> {
        console.log(error);
        this.launchItinerie(null);
      }
  }

  launchItinerie(info_tinerarie)
  {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'No se puede consultar el itinerario.',
      buttons: ['OK']
    });

    if(info_tinerarie.status){
      this.navCtrl.push(DetailPage, {info_tinerarie: info_tinerarie});
    }else{
      alert.present();
    }
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

  launchComments()
  {
    this.navCtrl.push(CommentsPage, {user_id: "user_id"});
  }
}