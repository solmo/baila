import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Channel } from '../tools/baila.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  private channelsCollection: AngularFirestoreCollection<Channel>;

  constructor(private afs: AngularFirestore) {
    this.channelsCollection = this.afs.collection('channels');
  }

  addChannel(data: Channel) {
    const id = this.afs.createId();
    data.id = id;
    this.channelsCollection.doc(id).set(data);
  }

  deleteChannel(id) {
    this.channelsCollection.doc(id).delete().
        catch((err) => {
          console.log(err);
    });
  }

  updateChannel(data: Channel) {
    this.channelsCollection.doc(data.id).update(data).
        catch((err) => {
          console.log(err);
    });
  }

  getChannels(): Observable <Channel[]> {
    return this.channelsCollection.valueChanges();
  }

}

