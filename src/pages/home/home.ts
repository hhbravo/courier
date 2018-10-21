import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  username = '';
  email = '';
  items = [];

  ngOnInit() {
    this.items = [
      {
        id:'1',
        orden:'00001',
        cliente: 'Hans H.B',
        direccion: 'Comas',
        estado: 'PENDIENTE'
      },
      {
        id:'2',
        orden:'00002',
        cliente: 'Juan C.R',
        direccion: 'Comas',
        estado: 'ENTREGADO'
      }
    ];
  }
  
  constructor(private navCtrl: NavController, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  itemSelected(evt) {
    console.log('itemSelected',evt);
  }

}
