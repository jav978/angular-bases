import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]=['Spidemar','Ironman','Thor','Hulk','Viuda Negra','Capitán Ameríca'];

  heroeBorrado: string = '';

  borrarHeroe(){

    //this.heroes.splice(2);
    //this.heroes= [];
    this.heroeBorrado =  this.heroes.shift() || '';
   // console.log(heroeBorrado)
  }
}
