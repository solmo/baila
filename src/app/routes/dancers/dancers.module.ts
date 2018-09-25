import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DancersRoutingModule } from './dancers-routing.module';
import { DancersComponent } from './dancers.component';
import { MyPrimeNgModule } from '../../tools/myprimeng.module';
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DancersRoutingModule,
    MyPrimeNgModule,
    FormsModule
  ],
  declarations: [DancersComponent]
})
export class DancersModule { }
