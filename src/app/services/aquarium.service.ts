import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { aquarium } from '../models/aquarium';

@Injectable({
  providedIn: 'root'
})
export class AquariumsService {

  addKeyToObject = _ => {
    const object = _.payload.val()
    object.key = _.payload.key;
    return object;
  }

  constructor(private firestore: AngularFirestore){
  }

  getAquarium() {
    return this.firestore.collection('acuarios').snapshotChanges();
  }

  createAquarium(aquarium: aquarium){
    return this.firestore.collection('acuarios').add(aquarium);
  }

  updateAquarium(aquarium: aquarium){
    this.firestore.doc('acuarios/' + aquarium.id).update(aquarium);
  }

  deleteAquarium(aquariumID: string){
    this.firestore.doc('acuarios/' + aquariumID).delete();
  }

}