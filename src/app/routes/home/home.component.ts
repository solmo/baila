import { Component, OnInit } from '@angular/core';
import { Rhythm } from '../../tools/baila.model';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rhythms: Rhythm[] = [];

  constructor() { }

  ngOnInit() {
  }

}
