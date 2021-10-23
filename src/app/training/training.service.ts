import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

@Injectable()
export class TrainingService {
  private availableExercises: Exercise[] = [];
  private runningExercise: Exercise;
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  pastExercisesChanged = new Subject<Exercise[]>();
  AudioURLFirestore: any;

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getAudioURLFirestore(): any {
    console.log('getting ref');
    const ref = this.storage.ref('fitnessApp/blob').getDownloadURL();
    console.log(ref);
    ref.subscribe((result) => {
      console.log(result);
      this.AudioURLFirestore = result;
      console.log('AudioURL = ', this.AudioURLFirestore);
      return result;
    });
  }

  fetchAvailableExercise() {
    this.db
      .collection('availableExercises')
      .snapshotChanges()
      .map((docArray) => {
        return docArray.map((doc) => {
          return {
            id: doc.payload.doc.id,
            // ...doc.payload.doc.data(),
            name: doc.payload.doc.data()['name'],
            duration: doc.payload.doc.data()['duration'],
            calories: doc.payload.doc.data()['calories'],
          };
        });
      })
      .subscribe(
        (exercises: Exercise[]) => {
          this.availableExercises = exercises;
          this.exercisesChanged.next([...this.availableExercises]);
        },
        (error) => {
          // console.log(error);
        }
      );
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      (ex) => selectedId === ex.id
    );

    this.exerciseChanged.next({ ...this.runningExercise });
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  completeExercise() {
    this.storePastExercises({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.storePastExercises({
      ...this.runningExercise,
      date: new Date(),
      duration: (this.runningExercise.duration * progress) / 100,
      calories: (this.runningExercise.calories * progress) / 100,
      state: 'cancelled',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  storePastExercises(exercise: Exercise) {
    this.db.collection('pastExercises').add(exercise);
  }

  fetchPastExercises() {
    console.log('Fetching past exercises ');
    this.db
      .collection('pastExercises')
      .valueChanges()
      .subscribe(
        (pastExercises: Exercise[]) => {
          this.pastExercisesChanged.next(pastExercises);
        },
        (error) => {
          // console.log(error);
        }
      );
  }
}
