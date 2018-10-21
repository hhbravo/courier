import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Order } from '../../providers/order-service/order-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  order: Order;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order  = navParams.get('order');
    console.log('DetailPage', this.order);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  dismiss(){
    this.navCtrl.setRoot(HomePage);
  }

}
