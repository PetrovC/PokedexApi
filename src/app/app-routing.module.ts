import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

const routes: Routes = [
  
  {path : 'details', component : DetailsComponent},
  {path : 'list/:url', component : ListComponent},
  {path : 'pokedex', component : PokedexComponent},
  {path : '', redirectTo : '/pokedex' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
