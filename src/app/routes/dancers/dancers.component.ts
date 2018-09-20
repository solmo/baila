import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DancersService } from '../../services/dancers.service';
import { Dancer } from '../../tools/baila.model';
import { RhythmsService } from '../../services/rhythms.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ba-dancers',
  templateUrl: './dancers.component.html',
  styleUrls: ['./dancers.component.css']
})
export class DancersComponent implements OnInit {

  cols: any[];
  dancer: Dancer = {
    name: 'nombre',
    photo: 'imagen',
    rhythms: [],
   };
  selectedDancer: Dancer;
  newDancer: boolean;
  displayDialog: boolean;
  dancers: Observable<Dancer[]>;
  public rhythmsOptions: Observable<any[]>;


  constructor(private dancersService: DancersService,
              private rhythmsService: RhythmsService ) { }


  public ngOnInit() {
    this.dancers = this.dancersService.getDancers();
    this.cols = [
      { field: 'name', header: 'Nombre' },
      { field: 'photo', header: 'Foto' },
      { field: 'rhythms', header: 'Ritmos'}
    ];
    this.rhythmsOptions = this.rhythmsService.getRhythms().pipe(
                  map(rhythms => rhythms.map(this.getValueFromRhythsOptions))
    );
  }

  getValueFromRhythsOptions(rhythm) {
    return {
      label: rhythm.name,
      value: rhythm.id
    };
  }

  showDialogToAdd() {
    this.newDancer = true;
    this.dancer = {};
    this.displayDialog = true;
  }

  saveDancer() {
    if (this.newDancer) {
        this.dancersService.addDancer(this.dancer);
    } else {
        this.dancersService.updateDancer(this.dancer);
    }
    this.dancer = {};
    this.displayDialog = false;
  }

  delDancer() {
    this.dancersService.deleteDancer(this.dancer.id);
    this.dancer = {};
    this.displayDialog = false;
  }

  onRowSelect(event) { // usar form.patchValue(event.data)
    this.newDancer = false;
    this.dancer = event.data;
    this.displayDialog = true;
  }
}

