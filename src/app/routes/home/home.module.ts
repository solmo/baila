import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../tools/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    ],
  declarations: [HomeComponent]
})
export class HomeModule { }
