import { RouterModule, Routes } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes: Routes = [
    {path : '' , component : LogoComponent},
    {path : 'maquina/:id', component : ResumenComponent}
];
@NgModule({
    imports: [
      RouterModule,
      NgApexchartsModule // Agregar aquí
    ],
  })
  export class AppRoutingModule { }
