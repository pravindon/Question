import { Component, OnInit } from '@angular/core';
import { JavascriptComponent } from './layout/javascript/javascript.component';

declare interface RouteInfo {
  path: string;
  img: string;
  title: string;
}

export const ROUTES: RouteInfo[] = [
         {
           path: '/javascript',
           title: 'Javascript',
           img: 'https://img.icons8.com/wired/64/000000/dashboard.png'
         },
         {
           path: '/angular',
           title: 'Angular',
           img: 'https://img.icons8.com/wired/64/000000/dashboard.png'
         },
         {
           path: '/bootstrapfour',
           title: 'Bootstrap 4',
           img: 'https://img.icons8.com/wired/64/000000/dashboard.png'
         },
         {
           path: '/cssthree',
           title: 'CSS 3',
           img: 'https://img.icons8.com/wired/64/000000/dashboard.png'
         },
         {
           path: '/express',
           title: 'Express',
           img: 'https://img.icons8.com/wired/64/000000/dashboard.png'
         },
         {
           path: '/htmlfive',
           title: 'HTML 5',
           img: 'https://img.icons8.com/wired/64/000000/dashboard.png'
         },
         {
           path: '/jquery',
           title: 'Jquery',
           img: 'https://img.icons8.com/wired/64/000000/dashboard.png'
         },
         {
           path: '/mongodb',
           title: 'Mongodb',
           img: 'https://img.icons8.com/wired/64/000000/dashboard.png'
         },
         {
           path: '/nodejs',
           title: 'Nodejs',
           img: 'https://img.icons8.com/wired/64/000000/dashboard.png'
         }
       ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuItems: any[];

  title = 'Question-Bank';
  panelOpenState = false;
  ngOnInit() {
    this.menuItems = ROUTES.filter(ItemMenu => ItemMenu);
  }
  getComingSoon(ROUTES) {
    if (ROUTES.comingsoon === 'false') {
      return false;
    } else {
      return 'COMING SOON';
    }
  }
}
