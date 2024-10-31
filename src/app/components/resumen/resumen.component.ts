import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
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
                    name: "Ganancia",
                    data: [1200, 940, 1340, 1440, 420, 1100, 670]
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            title: {
                text: "Resumen Semanal",
                style: {
                    fontSize: '25px',  // Ajusta el tamaño de fuente si es necesario
                    fontFamily: 'Times New Roman',
                    fontWeight: 900
                }
            },
            xaxis: {
                categories: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
                labels: {
                    style: {
                        fontSize: '11px',  // Ajusta el tamaño de fuente si es necesario
                        fontFamily: 'Times New Roman',
                        fontWeight: 900
                    }
                }
            },
            yaxis: {
                opposite: true, // Cambia este valor a true o false según la posición deseada.
                title: {
                    text: "Ventas",
                    style: {
                        fontSize: '25px',  // Ajusta el tamaño de fuente si es necesario
                        fontFamily: 'Times New Roman',
                        fontWeight: 900,
                        
                    }
                },
                labels: {
                    style: {
                        fontSize: '15px',  // Ajusta el tamaño de fuente si es necesario
                        fontFamily: 'Times New Roman',
                        fontWeight: 900,
                        
                    }
                }
            }
        };
    }

    ngOnInit(): void {
        console.log("En este instante el componente ha cargado");

        const ctx1 = document.getElementById('myChart1') as HTMLCanvasElement;

        //
        const myChart1 = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '',
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
        //Gráfico linea, Color Azul
        const ctx2 = document.getElementById('myChart2') as HTMLCanvasElement;
        const myChart2 = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Ejemplo de meses
                datasets: [{
                    label: '',
                    data: [4500, 5500, 8000, 6200, 10000, 12476], // Ejemplo de datos
                    backgroundColor: 'rgb(0, 191, 255)', // Azul con opacidad
                    borderColor: '#00BFFF', // Azul sólido
                    fill: true, // Rellena el área bajo la línea
                    tension: 0.4, // Hace la línea más curva
                    pointRadius: 0 // Oculta los puntos de datos
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // Oculta la leyenda si no la necesitas
                    },
                    tooltip: {
                        enabled: false // Desactiva los tooltips al pasar el mouse
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        display: false // Oculta el eje Y y sus etiquetas
                    },
                    x: {
                        display: false // Oculta el eje X y sus etiquetas
                    }
                }
            }
        });
        //Gráfico linea, Color Amarillo
        const ctx3 = document.getElementById('myChart3') as HTMLCanvasElement;
        const myChart3 = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Ejemplo de meses
                datasets: [{
                    label: '',
                    data: [4500, 5500, 7000, 1000, 9000, 12476], // Ejemplo de datos
                    backgroundColor: 'rgb(252, 234, 0)', // Amarillo con opacidad
                    borderColor: '#fcea00', // Amarillo sólido
                    fill: true, // Rellena el área bajo la línea
                    tension: 0.4, // Hace la línea más curva
                    pointRadius: 0 // Oculta los puntos de datos
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // Oculta la leyenda si no la necesitas
                    },
                    tooltip: {
                        enabled: false // Desactiva los tooltips al pasar el mouse
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        display: false // Oculta el eje Y y sus etiquetas
                    },
                    x: {
                        display: false // Oculta el eje X y sus etiquetas
                    }
                }
            }
        });
        //Gráfico linea, Color Rosa
        const ctx4 = document.getElementById('myChart4') as HTMLCanvasElement;
        const myChart4 = new Chart(ctx4, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Ejemplo de meses
                datasets: [{
                    label: '',
                    data: [4500, 5500, 8000, 6200, 1000, 12476], // Ejemplo de datos
                    backgroundColor: 'rgb(255, 0, 255)', // Rosa con opacidad
                    borderColor: '#ff00ff', // Rosa sólido
                    fill: true, // Rellena el área bajo la línea
                    tension: 0.4, // Hace la línea más curva
                    pointRadius: 0 // Oculta los puntos de datos
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // Oculta la leyenda si no la necesitas
                    },
                    tooltip: {
                        //enabled: false // Desactiva los tooltips al pasar el mouse
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        display: false // Oculta el eje Y y sus etiquetas
                    },
                    x: {
                        display: false // Oculta el eje X y sus etiquetas
                    }
                }
            }
        });
        //Gráficos circulares
        const ctx5 = document.getElementById('myChart5') as HTMLCanvasElement;
        const myChart5 = new Chart(ctx5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // Oculta la leyenda si no la necesitas
                    },
                    tooltip: {
                        enabled: false // Desactiva los tooltips al pasar el mouse
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        display: false // Oculta el eje Y y sus etiquetas
                    },
                    x: {
                        display: false // Oculta el eje X y sus etiquetas
                    }
                }
            }
        });
    }
}
