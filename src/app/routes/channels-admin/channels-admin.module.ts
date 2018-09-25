import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsAdminRoutingModule } from './channels-admin-routing.module';
import { ChannelsAdminComponent } from './channels-admin.component';
import { FormsModule} from '@angular/forms';
import { MyPrimeNgModule } from '../../tools/myprimeng.module';

@NgModule({
  imports: [
    CommonModule,
    ChannelsAdminRoutingModule,
    MyPrimeNgModule,
    FormsModule
  ],
  declarations: [ChannelsAdminComponent]
})
export class ChannelsAdminModule { }
