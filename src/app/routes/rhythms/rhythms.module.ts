import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RhythmsRoutingModule } from './rhythms-routing.module';
import { RhythmsComponent } from './rhythms.component';
import { MyprimengModule } from '../../tools/myprimeng.module';


@NgModule({
  imports: [
    CommonModule,
    RhythmsRoutingModule,
    MyprimengModule,
    FormsModule
  ],
  declarations: [RhythmsComponent]
})
export class RhythmsModule { }
