import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsoApiService, Pokemon, Results } from 'src/app/services/conso-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private conso : ConsoApiService,
    private router : Router
  ) { }
  
  objectFromApi: Results = {next: '', previous: '', results: [] }

  ngOnInit(): void {
    this.loadPokemon()
  }
  loadPokemon(){
    this.conso.getAllPokemon().subscribe(
      (pokemonListFromApi : Results) => {
        this.objectFromApi = pokemonListFromApi
      }
    )
  }
  nextPrevious(url:string){
    this.conso.nextPreviousPokemon(url).subscribe(
      (pokemonListFromApi : Results) => {
        this.objectFromApi = pokemonListFromApi
      }
    )
  }
  showDetailes(url:string){
    this.router.navigate(['list/',url])
  }
}
