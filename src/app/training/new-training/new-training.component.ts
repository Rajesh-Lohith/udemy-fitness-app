import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  availableTrainings: Exercise[];
  exerciseSubscription: Subscription;
  AUdioURLFirestore: any =
    'https://firebasestorage.googleapis.com/v0/b/fitness-34d54.appspot.com/o/fitnessApp%2Fblob?alt=media&token=c26d5b5f-8bd2-487b-8e5e-5bc49f50c6ea';

  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore
  ) {}
  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
      (ex) => (this.availableTrainings = ex)
    );
    this.trainingService.fetchAvailableExercise();
    // this.AUdioURLFirestore = this.trainingService.getAudioURLFirestore();
    // console.log('AUdioURLFirestore', this.AUdioURLFirestore);
  }

  onAddNewTraining(exerciseForm: NgForm) {
    this.trainingService.startExercise(exerciseForm.value.selectedExercise);
  }
}
