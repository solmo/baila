import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Rhythm } from '../tools/baila.model';

@Injectable({
  providedIn: 'root'
})
export class RhythmsService {

  private rhythmsCollection: AngularFirestoreCollection<Rhythm>;

  constructor(private afs: AngularFirestore) {
    this.rhythmsCollection = this.afs.collection('rhythms');
  }

  addRhythm(data: Rhythm) {
    const id = this.afs.createId();
    data.id = id;
    this.rhythmsCollection.doc(id).set(data);
  }

  deleteRhythm(id) {
    this.rhythmsCollection.doc(id).delete().
        catch((err) => {
          console.log(err);
    });
  }

  updateRhythm(data: Rhythm) {
    this.rhythmsCollection.doc(data.id).update(data).
        catch((err) => {
          console.log(err);
    });
  }

  getRhythms(): Observable <Rhythm[]> {
    return this.rhythmsCollection.valueChanges();
  }
}
