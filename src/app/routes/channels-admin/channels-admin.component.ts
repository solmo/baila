import { Component, OnInit } from '@angular/core';
import { Channel } from '../../tools/baila.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChannelsService } from '../../services/channels.service';
import { DancersService } from '../../services/dancers.service';
import { RhythmsService } from '../../services/rhythms.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ba-channels-admin',
  templateUrl: './channels-admin.component.html',
  styleUrls: ['./channels-admin.component.css']
})

export class ChannelsAdminComponent implements OnInit {
  cols: any[];
  channel: Channel = {
    dancerId: '',
    rhythmId: '',
    title: '',
    videoId: ''
  };

  selectedChannel: Channel;
  newChannel: boolean;
  displayDialog: boolean;
  channels: Observable<Channel[]>;
  dancersOptions: Observable<any[]>;
  rhythmsOptions: Observable<any[]>;

  constructor(private channelsService: ChannelsService,
              private dancersService: DancersService,
              private rhythmsService: RhythmsService ) { }

  ngOnInit() {
    this.channels = this.channelsService.getChannels();
    this.dancersOptions = this.dancersService.getDancers().pipe(
      map(dancers => dancers.map(this.getValueFromDancersOptions)));
    this.rhythmsOptions = this.rhythmsService.getRhythms().pipe(
      map(rhythms => rhythms.map(this.getValueFromRhythmsOptions)));
    this.cols = [
      { field: 'title', header: 'Titulo' },
      { field: 'videoId', header: 'Codigo del Canal' },
      { field: 'dancerId', header: 'Codigo Dancer' },
      { field: 'rhytmId', header: 'Codigo Ritmo' }
    ];
  }
  getValueFromRhythmsOptions(rhythm) {
    return {
      label: rhythm.name,
      value: rhythm.id
     };
  }
  getValueFromDancersOptions(dancer) {
    return {
      label: dancer.name,
      value: dancer.id
     };
  }

  showDialogToAdd() {
    this.newChannel = true;
    this.channel = {};
    this.displayDialog = true;
  }

  saveChannel() {
    if (this.newChannel) {
        // arreglar id de referencias
        this.channelsService.addChannel(this.channel);
    } else {
        this.channelsService.updateChannel(this.channel);
    }
    this.channel = {};
    this.displayDialog = false;
  }

  delChannel                         () {
    this.channelsService.deleteChannel(this.channel.id);
    this.channel = {};
    this.displayDialog = false;
  }

  onRowSelect(event) { // use form.patchValue(event.data)
    this.newChannel = false;
    this.channel = event.data;
    this.displayDialog = true;
  }


}
