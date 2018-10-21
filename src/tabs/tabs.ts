import { Component } from '@angular/core';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 
  tabOrders = HomePage;
  tabHistory =  HistoryPage;
  constructor() {

  }
}