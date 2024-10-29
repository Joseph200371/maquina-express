import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaquinaComponent } from '../maquina/maquina.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { ResumenComponent } from '../resumen/resumen.component';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,MaquinaComponent,TopbarComponent,ResumenComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(){
    $(document).ready(function(){
      $('select').formSelect();
    });
  }
}
