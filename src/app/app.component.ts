import { Component } from '@angular/core';
import { Pokemon } from "./Model/pokemon"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Pokemons';
  pokemon: Pokemon = {
    id:1,
    name: 'Bubasaur',
    categoria: 'Plant',
    nivel: 1
  }
}
