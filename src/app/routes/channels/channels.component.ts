import { Component, OnInit } from '@angular/core';
import { Channel } from '../../tools/baila.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ba-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels: Observable<Channel[]>;
  channelsCollection: AngularFirestoreCollection<Channel>;
  rhythmId: any;
  player: YT.Player;

  constructor(private afs: AngularFirestore,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.rhythmId = this.route.snapshot.params['rhythmId'];
    this.channelsCollection = this.afs.collection('channels',
          ref => ref.where('rhythmId', '==', this.rhythmId));
    this.channels = this.channelsCollection.valueChanges();
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }

  OnMatCardClickEvent(channel) {}
}
