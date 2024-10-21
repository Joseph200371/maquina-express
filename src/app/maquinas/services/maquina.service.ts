import { Injectable } from '@angular/core';
import { Maquina } from '../models/maquina';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  private maquinas: Maquina[]=[
    {
      id:1,
      alias:"Arregui 524-1",
      descripcion:"maquina comidas organicas " ,
      modelo:"ABX 524",
      marca:"Philips",
      estado:"Encendida",
      url:""
    },
    {
      id:2,
      alias:"Lincond 2547-1",
      descripcion:"maquina golosinas-galletitas-aperitivos" ,
      modelo:"ABX 524",
      marca:"Philips",
      estado:"Encendida",
      url:""
    },
    {
      id:3,
      alias:"UADE 9-de-julio 3B",
      descripcion:"maquina bebidas lata" ,
      modelo:"C124 ",
      marca:"General Electric",
      estado:"Encendida",
      url:""
    }

  ];


  constructor() { }
  //cambiar por url spring
  listmaquinas(): Observable<Maquina[]>{
    var lista : Maquina[]= [];
    this.maquinas.forEach(maquina => lista.push({
      id:maquina.id,
      alias:maquina.alias,
      descripcion:"",
      modelo:"",
      marca:"",
      estado:"",
      url:""}));
    return of(lista);
  }

  findbyId(id:number): Observable<any>{ 
    var maquina=this.maquinas.find(maquina => maquina.id==id);
    return of(maquina);
  }

}
