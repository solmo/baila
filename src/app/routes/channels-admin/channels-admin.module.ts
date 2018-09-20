import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsAdminRoutingModule } from './channels-admin-routing.module';
import { ChannelsComponent } from './channels.component';
import { FormsModule} from '@angular/forms';
import { MyprimengModule } from '../../tools/myprimeng.module';

@NgModule({
  imports: [
    CommonModule,
    ChannelsAdminRoutingModule,
    MyprimengModule,
    FormsModule
  ],
  declarations: [ChannelsComponent]
})
export class ChannelsAdminModule { }
