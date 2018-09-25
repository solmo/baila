import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RhythmsRoutingModule } from './rhythms-routing.module';
import { RhythmsComponent } from './rhythms.component';
import { MyPrimeNgModule } from '../../tools/myprimeng.module';

@NgModule({
  imports: [
    CommonModule,
    RhythmsRoutingModule,
    MyPrimeNgModule,
    FormsModule
  ],
  declarations: [RhythmsComponent]
})
export class RhythmsModule { }
