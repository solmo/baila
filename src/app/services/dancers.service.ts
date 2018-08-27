import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Dancer } from '../tools/baila.model';

@Injectable({
  providedIn: 'root'
})
export class DancersService {

  private dancersCollection: AngularFirestoreCollection<Dancer>;

  constructor(private afs: AngularFirestore) {
    this.dancersCollection = this.afs.collection('dancers');
  }

  addDancer(data: Dancer) {
    const id = this.afs.createId();
    data.id = id;
    this.dancersCollection.doc(id).set(data);
  }

  deleteDancer(id) {
    this.dancersCollection.doc(id).delete().
        catch((err) => {
          console.log(err);
    });
  }

  updateDancer(data: Dancer) {
    this.dancersCollection.doc(data.id).update(data).
        catch((err) => {
          console.log(err);
    });
  }

  getDancers(): Observable <Dancer[]> {
    return this.dancersCollection.valueChanges();
  }
}
