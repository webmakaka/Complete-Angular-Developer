import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
  QuerySnapshot,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, combineLatest, map, of, switchMap } from 'rxjs';
import IClip from 'src/app/models/clip.model';

@Injectable({
  providedIn: 'root',
})
export class ClipService {
  public clipsCollection: AngularFirestoreCollection<IClip>;

  constructor(
    private db: AngularFirestore,
    private auth: AngularFireAuth,
    private storage: AngularFireStorage
  ) {
    this.clipsCollection = db.collection('clips');
  }

  createClip(data: IClip): Promise<DocumentReference<IClip>> {
    return this.clipsCollection.add(data);
  }

  getUserClips(sort$: BehaviorSubject<string>) {
    return combineLatest([this.auth.user, sort$]).pipe(
      switchMap((values) => {
        const [user, sort] = values;

        if (!user) {
          return of([]);
        }
        const query = this.clipsCollection.ref
          .where('uid', '==', user.uid)
          .orderBy('timestamp', sort === '1' ? 'desc' : 'asc');

        return query.get();
      }),
      map((snapshot) => (snapshot as QuerySnapshot<IClip>).docs)
    );
  }

  updateClip(id: string, title: string) {
    return this.clipsCollection.doc(id).update({
      title,
    });
  }

  async deleteClip(clip: IClip) {
    const clipRef = this.storage.ref(`clips/${clip.fileName}`);
    const screenshotRef = this.storage.ref(
      `screenshots/${clip.screenshotFileName}`
    );

    await clipRef.delete();
    await screenshotRef.delete();

    await this.clipsCollection.doc(clip.docID).delete();
  }
}
