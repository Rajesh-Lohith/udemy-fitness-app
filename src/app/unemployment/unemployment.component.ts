import { Component, OnInit } from '@angular/core';
import { UnemploymentService } from './service';

@Component({
  selector: 'app-unemployment',
  templateUrl: './unemployment.component.html',
  styleUrls: ['./unemployment.component.scss'],
})
export class UnemploymentComponent implements OnInit {
  unemploymentData: any;

  constructor(private us: UnemploymentService) {}

  ngOnInit(): void {
    this.us.getUnemploymentData().subscribe((data) => {
      this.unemploymentData = data;
      console.log(this.unemploymentData);
    });
  }
}
