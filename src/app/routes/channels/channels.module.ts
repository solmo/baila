import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsRoutingModule } from './channels-routing.module';
import { ChannelsComponent } from './channels.component';
import { MyPrimeNgModule } from '../../tools/myprimeng.module';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { ComponentsModule } from '../../tools/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    YoutubePlayerModule,
    MyPrimeNgModule,
    ComponentsModule
  ],
  declarations: [ChannelsComponent]
})
export class ChannelsModule { }
