import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BuildingPermitService } from './service';

@Component({
  selector: 'app-building-permits',
  templateUrl: './building-permits.component.html',
  styleUrls: ['./building-permits.component.scss'],
})
export class BuildingPermitsComponent implements OnInit {
  labels: any;
  data: any;

  constructor(private bps: BuildingPermitService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.bps.getBuildingPermitLabels().subscribe((labels) => {
      this.labels = labels;
      this.bps.getBuildingPermitData().subscribe((data) => {
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
