import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { ProviderJsonProvider } from '../../providers/provider-json/provider-json';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})

export class RegisterPage {

    name
    cellphone
    email
    password
    contact_name
    contact_phone
    contact_kin
  
    constructor(public navCtrl: NavController, 
                public navParm: NavParams,
                public provider: ProviderJsonProvider,
                public alertCtrl: AlertController,
                private platform: Platform,
                private storage: Storage) 
    {
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

    loadRegister()
    {
        if(this.name == undefined || this.cellphone == undefined || this.email == undefined
            || this.password == undefined || this.contact_name == undefined || this.contact_phone == undefined
            || this.contact_kin == undefined){

            let alert = this.alertCtrl.create({
                title: 'Advertencia',
                subTitle: 'Los campos con * son obligatorios',
                buttons: ['OK']
                });
            alert.present();
        }else{    
            this.provider.postRegister(this.name, this.cellphone, this.email, this.password,
                                        this.contact_name, this.contact_phone, this.contact_kin)
            .subscribe(
                (data) => {
                    console.log(data);
                    let alert = this.alertCtrl.create({
                        title: 'Usuario registrado',
                        subTitle: 'El usuario se registro con exito, ya puede ingresar a la aplicación con el correo y contraseña creados',
                        buttons: ['OK']
                        });
                    alert.present();
                    this.navCtrl.pop();
                },
                (err)=> {
                    console.log(err);
                    let alert = this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Ocurrio un error en el registro',
                        buttons: ['OK']
                        });
                    alert.present();
                }
            ); 
        }     
    }

}