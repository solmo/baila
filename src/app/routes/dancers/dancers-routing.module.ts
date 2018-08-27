import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DancersComponent } from './dancers.component';

const routes: Routes = [
  {
    path: '',
    component: DancersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DancersRoutingModule { }
