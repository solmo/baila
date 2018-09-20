import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DancersRoutingModule } from './dancers-routing.module';
import { DancersComponent } from './dancers.component';
import { MyprimengModule } from '../../tools/myprimeng.module';
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DancersRoutingModule,
    MyprimengModule,
    FormsModule
  ],
  declarations: [DancersComponent]
})
export class DancersModule { }
