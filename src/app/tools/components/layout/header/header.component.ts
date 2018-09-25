import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
  /**
    this.items = [
      {label: 'Bailarines', icon: 'pi pi-user', routerLink: ['/dancers']},
      {label: 'Canales', icon: 'pi pi-video', routerLink: ['/channels']},
      {label: 'Ritmos', icon: 'pi pi-music', routerLink: ['/rhythms']},
  ];
   */
  }

}
