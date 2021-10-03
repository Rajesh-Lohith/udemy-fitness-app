import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';

export class TrainingService {
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch toes', name: 'Touch Toes', duration: 90, calories: 16 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 150, calories: 24 },
    { id: 'burpees', name: 'Burpees', duration: 180, calories: 32 },
  ];
  private runningExercise: Exercise;
  exerciseChanged = new Subject<Exercise>();
  private pastExercises: Exercise[] = [];

  getExercise(): Exercise[] {
    return [...this.availableExercises];
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
    this.pastExercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.pastExercises.push({
      ...this.runningExercise,
      date: new Date(),
      duration: (this.runningExercise.duration * progress) / 100,
      calories: (this.runningExercise.calories * progress) / 100,
      state: 'cancelled',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getPastExercises() {
    return this.pastExercises.slice();
  }
}
