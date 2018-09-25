import { Component, OnInit } from '@angular/core';
import { Rhythm } from '../../tools/baila.model';
import { RhythmsService } from '../../services/rhythms.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rhythms: Observable<Rhythm[]>;

  constructor(private rhythmsService: RhythmsService,
              private router: Router) { }

  ngOnInit() {
    this.rhythms = this.rhythmsService.getRhythms();
  }

  OnMatCardClickEvent(rhythm) {
    console.log(rhythm.name);
    console.log(rhythm.id);
    this.router.navigate(['channels', rhythm.id]);
  }
}
