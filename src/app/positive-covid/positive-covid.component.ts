import { Component, OnInit } from '@angular/core';
import { PositiveCovidService } from './service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-positive-covid',
  templateUrl: './positive-covid.component.html',
  styleUrls: ['./positive-covid.component.scss'],
})
export class PositiveCovidComponent implements OnInit {
  labels: any;
  data: any;
  constructor(private pcs: PositiveCovidService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.pcs.getPositiveLabels().subscribe((l) => {
      this.labels = l;
      this.pcs.getPositiveData().subscribe((data) => {
        this.data = data;
        this.constructChart();
      });
    });
  }

  constructChart() {
    const myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Number of Positive COVID-19 at any particular day',
            data: this.data,
            fill: true,
            borderColor: '#0000FF',
            tension: 1,
            borderWidth: 1,
            backgroundColor: '#FFA591',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
