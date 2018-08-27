import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DancersRoutingModule } from './dancers-routing.module';
import { DancersComponent } from './dancers.component';
import { MyprimengModule } from '../../tools/myprimeng.module';
import { Dancer } from '../../tools/baila.model';

@NgModule({
  imports: [
    CommonModule,
    DancersRoutingModule,
    MyprimengModule
  ],
  declarations: [DancersComponent]
})
export class DancersModule { }
