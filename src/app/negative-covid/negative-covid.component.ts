import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NegativeCovidService } from './service';

@Component({
  selector: 'app-negative-covid',
  templateUrl: './negative-covid.component.html',
  styleUrls: ['./negative-covid.component.scss'],
})
export class NegativeCovidComponent implements OnInit {
  labels: any;
  data: any;

  constructor(private ncs: NegativeCovidService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.ncs.getNegativeLabels().subscribe((labels) => {
      this.labels = labels;
      this.ncs.getNegativeData().subscribe((data) => {
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
            label: 'Number of Negative COVID-19 at any particular day',
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
