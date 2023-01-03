import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Contador App';
  numero: number = 10;
/*
  sumar(){
    this.numero++;
  }

  restar(){
    this.numero--;
  }*/

  base:number = 5;

  acumular(valor:number){
    this.numero+=valor;
  }
}
