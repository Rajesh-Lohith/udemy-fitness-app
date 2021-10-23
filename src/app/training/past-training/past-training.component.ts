import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.scss'],
})
export class PastTrainingComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sort: MatSort;
  filterValue: string;
  private pastExercisesChangedSubscription: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnDestroy(): void {
    this.pastExercisesChangedSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.pastExercisesChangedSubscription =
      this.trainingService.pastExercisesChanged.subscribe(
        (pastExercises: Exercise[]) => {
          this.dataSource.data = pastExercises;
        }
      );
    this.trainingService.fetchPastExercises();
  }

  filterTableContent($event) {
    this.filterValue = $event.target.value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
}
