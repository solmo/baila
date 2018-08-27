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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
