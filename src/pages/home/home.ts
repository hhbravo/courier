import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { DetailPage } from '../detail/detail';
import { OrderServiceProvider } from '../../providers/order-service/order-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username = '';
  email = '';
  orders = [];
  loading: Loading;

  constructor(private navCtrl: NavController, private auth: AuthServiceProvider, private loadingCtrl: LoadingController, private orderService: OrderServiceProvider, private alertCtrl: AlertController) {
    let info = this.auth.getUserInfo();
    console.log('user',info);
    this.username = info['name'];
    this.email = info['email'];
    this.orderService.listOrder().subscribe(
      result => {
        this.orders = result;
      }
    );
    console.info('orders', this.orders);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  itemSelected(evt) {
    console.log('itemSelected', evt);
    this.showLoading();
    this.navCtrl.setRoot(DetailPage, {order : evt} );
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere un momento...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
