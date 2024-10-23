import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-resumen',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './resumen.component.html',
    styleUrl: './resumen.component.css'
})
export class ResumenComponent implements OnInit {
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor(private _route: ActivatedRoute) {
        console.log(this._route.snapshot.paramMap.get('id'));

        this.chartOptions = {
            series: [
                {
                    name: "My-series",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            title: {
                text: undefined
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
            }
        };
    }

    ngOnInit() {
        console.log("En este instante el componente ha cargado");

        const ctx = document.getElementById('myChart') as HTMLCanvasElement;

        const myChart = new Chart("flush-area-chart-blue", {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
