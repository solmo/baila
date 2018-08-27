import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RhythmsComponent } from './rhythms.component';

const routes: Routes = [
  {
    path: '',
    component: RhythmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhythmsRoutingModule { }
