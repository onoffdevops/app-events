import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { ProviderJsonProvider } from '../../providers/provider-json/provider-json';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-comments',
    templateUrl: 'comments.html'
})

export class CommentsPage {

    user_id
    application
    suggestion
  
    constructor(public navCtrl: NavController, 
                public navParm: NavParams,
                public provider: ProviderJsonProvider,
                public alertCtrl: AlertController,
                private platform: Platform,
                private storage: Storage) 
    {
        this.user_id = navParm.get('user_id');
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

    loadComments()
    {
        if(this.suggestion == undefined || this.application == undefined){
            let alert = this.alertCtrl.create({
                title: 'Advertencia',
                subTitle: 'Los campos con * son obligatorios',
                buttons: ['OK']
                });
            alert.present();
        }else{    
            this.storage.get('user_id').then((val) => {
                console.log('user_id', val);
                if(val != undefined && val > 0){       
                    this.user_id = val; 
                    this.provider.postComments(this.user_id, this.application, this.suggestion)
                    .subscribe(
                        (data) => {
                            console.log(data);
                            let alert = this.alertCtrl.create({
                                title: 'Comentario enviado',
                                subTitle: 'El comentario se cargó con exito',
                                buttons: ['OK']
                                });
                            alert.present();
                        },
                        (err)=> {
                            console.log(err);
                            let alert = this.alertCtrl.create({
                                title: 'Error',
                                subTitle: 'Ocurrio un error enviando el comentario',
                                buttons: ['OK']
                                });
                            alert.present();
                        }
                    ); 
                }
              });         
            
        }     
    }

}