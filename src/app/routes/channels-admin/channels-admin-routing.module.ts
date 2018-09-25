import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelsAdminComponent } from './channels-admin.component';

const routes: Routes = [
  {
    path: '',
    component: ChannelsAdminComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsAdminRoutingModule { }
