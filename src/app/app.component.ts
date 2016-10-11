import { Component } from '@angular/core';
import { Pokemon } from "./Model/pokemon";


const POKEMONS: Pokemon[] =
  [
    { id:1, name: "Bubasaur",  categoria: "Plant",  nivel:1 },
    { id:2, name: "Ivysaur",   categoria: "Plant",  nivel:2 },
    { id:3, name: "Venussaur", categoria: "Plant",  nivel:3 }
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Tour of Pokemons';
  pokemons = POKEMONS;
}
