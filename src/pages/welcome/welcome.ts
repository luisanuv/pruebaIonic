import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompleteListPage } from '../complete-list/complete-list';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private callNumber: CallNumber) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['call', 'call', 'call', 'call', 'call', 'call', 'call'];

    this.items = [];
    for (let i = 1; i < 8; i++) {
      this.items.push({
        title: 'Number ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  call(telephoneNumber) {
    this.callNumber.callNumber('930231424', true);
}


  verMas(){
    this.navCtrl.push(CompleteListPage);
  }



}
