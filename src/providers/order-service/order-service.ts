import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class Order {
  id: string;
  order: string;
  client: string;
  address: string;
  status: string;

  constructor(id: string, order: string, client: string, address: string, status: string){
    this.id = id;
    this.order = order;
    this.client = client;
    this.address = address;
    this.status =  status;
  }
}

@Injectable()
export class OrderServiceProvider {
  orders : Order[];

  public listOrder(){
    return Observable.create(observer => {
      this.orders = [];
      this.orders.push(new Order('1','00001','Hans H.B','Comas','Pendiente'));
      this.orders.push(new Order('2','00002','Juan C.R','Comas','Entregado'));
      observer.next(this.orders);
      observer.complete();
    });
  }

  public allOrders() {
    return this.orders;
  }
}
