import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
   
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterComponent } from './counter/components/counter.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CounterComponent,HeroComponent,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = 'Mi primera app en angular';

}
