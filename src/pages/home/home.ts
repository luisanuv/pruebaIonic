import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginPage } from '../login/login';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  newLogin: any = {};
  model: any = {};
  loading = false;
 
  constructor(app:App, menu: MenuController,
              public navCtrl: NavController,
              private formBuilder: FormBuilder,
              public loadingCtrl: LoadingController) {
              //menu.enable(true);
              }
  
   ngOnInit() {
  }


  loginTemporal(){
    console.log(this.newLogin);
    this.navCtrl.push(WelcomePage);
  }


}
