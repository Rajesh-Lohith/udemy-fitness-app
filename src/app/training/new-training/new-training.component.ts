import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingOngoing = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onAddNewTraining() {
    this.trainingOngoing.emit();
  }
}
