import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TotalCovidService } from './service';

@Component({
  selector: 'app-total-covid',
  templateUrl: './total-covid.component.html',
  styleUrls: ['./total-covid.component.scss'],
})
export class TotalCovidComponent implements OnInit {
  labels: any;
  data: any;

  constructor(private tcs: TotalCovidService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.tcs.getTotalLabels().subscribe((labels) => {
      this.labels = labels;
      this.tcs.getTotalData().subscribe((data) => {
        this.data = data;
        this.constructLineChart();
      });
    });
  }

  constructLineChart() {
    const myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Number of Total COVID-19 at any particular day',
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
