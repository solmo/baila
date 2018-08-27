import { Component, OnInit } from '@angular/core';
import { Rhythm } from '../../tools/baila.model';
import { Observable } from 'rxjs';
import { RhythmsService } from '../../services/rhythms.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ba-rhythms',
  templateUrl: './rhythms.component.html',
  styleUrls: ['./rhythms.component.css']
})
export class RhythmsComponent implements OnInit {

  cols: any[];
  rhythm: Rhythm = {
    name: 'nombre',
    picture: 'imagen'
   };
  selectedRhythm: Rhythm;
  newRhythm: boolean;
  displayDialog: boolean;
  rhythms: Observable<Rhythm[]>;

  constructor(private rhythmsService: RhythmsService ) { }

  ngOnInit() {
    this.rhythms = this.rhythmsService.getRhythms();
    this.cols = [
      { field: 'name', header: 'Nombre' },
      { field: 'picture', header: 'Imagen' }
    ];
  }

  showDialogToAdd() {
    this.newRhythm = true;
    this.rhythm = {};
    this.displayDialog = true;
  }

  saveRhythm() {
    if (this.newRhythm) {
        this.rhythmsService.addRhythm(this.rhythm);
    } else {
        this.rhythmsService.updateRhythm(this.rhythm);
    }
    this.rhythm = {};
    this.displayDialog = false;
  }

  delRhythm() {
    this.rhythmsService.deleteRhythm(this.rhythm.id);
    this.rhythm = {};
    this.displayDialog = false;
  }

  onRowSelect(event) { // usar form.patchValue(event.data)
    this.newRhythm = false;
    this.rhythm = event.data;
    this.displayDialog = true;
  }
}
