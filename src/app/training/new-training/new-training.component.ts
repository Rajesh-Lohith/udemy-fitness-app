import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit {
  availableTrainings: Exercise[];

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.availableTrainings = this.trainingService.getExercise();
  }

  onAddNewTraining(exerciseForm: NgForm) {
    this.trainingService.startExercise(exerciseForm.value.selectedExercise);
  }
}
