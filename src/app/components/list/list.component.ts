import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsoApiService, PokemonDetail } from 'src/app/services/conso-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  myPokemon : PokemonDetail = {height:0, id: 0, name: "", sprites: {front_default: ""}, weight: 0}
  indexFromRoute : string = ''

  constructor(
    private conso : ConsoApiService,
    private ac : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.indexFromRoute = this.ac.snapshot.params['url']
    this.conso.getOnePokemon(this.indexFromRoute).subscribe(
      (pokemonFromApi : PokemonDetail) => {
        this.myPokemon = pokemonFromApi
      }
    )
  }
}
