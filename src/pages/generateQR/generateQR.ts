import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Navbar, Platform} from 'ionic-angular';

@Component({
    selector: 'page-generateQR',
    templateUrl: 'generateQR.html'
  })

export class GenerateQRPage {
    url; 

    constructor(public navParm: NavParams) 
    {
        this.url = navParm.get('url');  
        
    }
}