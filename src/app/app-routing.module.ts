import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './routes/home/home.module#HomeModule'
  },
  {
    path: 'dancers',
    loadChildren: './routes/dancers/dancers.module#DancersModule'
  },
  {
    path: 'rhythms',
    loadChildren: './routes/rhythms/rhythms.module#RhythmsModule'
  },
  {
    path: 'channels-admin',
    loadChildren: './routes/channels-admin/channels-admin.module#ChannelsAdminModule'
  },
  {
    path: 'channels',
    loadChildren: './routes/channels/channels.module#ChannelsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
