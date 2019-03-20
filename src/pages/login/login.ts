import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { ProviderJsonProvider } from '../../providers/provider-json/provider-json';
import { TestServiceProvider } from '../../providers/test-service/test-service';
import { CustomersPage } from '../customers/customers';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
 
//import { PickerPage } from '../../pages/picker/picker';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  password: string;
 
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              public provider: ProviderJsonProvider,
              private platform: Platform,
              private storage: Storage) 
  {              
  }  

  loadLogin()
  {
  	this.provider.getInfoCustomer(this.username, this.password)
  	.subscribe(
      (data) => {
        console.log(data);
        this.login(data);
      },

      (err)=> {
        console.log(err);
        this.login(null);
      }
    );
      
  }
 
  login(data) 
  {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'El usuario o la contraseña ingresados son incorrectos.',
      buttons: ['OK']
    });
 
    if (data != null && data.status) {
      this.storage.set('user_id', data.data.user_id); 
      this.navCtrl.push(CustomersPage, {info_data: data});
    } else {
      alert.present();
    }
    this.username = '';
    this.password = '';
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
    this.platform.exitApp();
  }

  register()
  {
    this.navCtrl.push(RegisterPage);
  }
 
}