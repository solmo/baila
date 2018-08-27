import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ba-dancers',
  templateUrl: './dancers.component.html',
  styleUrls: ['./dancers.component.css']
})
export class DancersComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuider: FormBuilder) { }

  ngOnInit() {
  }

}
