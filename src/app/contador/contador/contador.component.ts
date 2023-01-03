import {  Component } from "@angular/core";


@Component({
  selector:'app-contador',
  template:`
    <h1>{{ title }}</h1>
    <br>
    <h3>la Base es: <strong>{{ base }}</strong></h3>
    <br>
    <button (click)="acumular(base)"> + {{ base }} </button>
    <span>{{ numero }}</span>
    <button (click) ="acumular( base * -1 )"> - {{ base }} </button>

  `
})

export class ContadorComponent{
  title: string = 'Contador App';
  numero: number = 10;
  base:number = 5;
  
  acumular(valor:number){
    this.numero+=valor;
  }
}
