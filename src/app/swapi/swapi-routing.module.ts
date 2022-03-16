import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetDetailsComponent } from './pages/planets/planet-details/planet-details.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { ShipsDetailsComponent } from './pages/starships/ships-details/ships-details.component';
import { StarshipsComponent } from './pages/starships/starships.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'starships', component:StarshipsComponent
      },
      {
        path:'starships/:id', component:ShipsDetailsComponent
      },
      {
        path:'people', component:PeopleComponent
      },
      {
        path:'people/:id',component:PeopleDetailsComponent
      },
      {
        path:'planets', component:PlanetsComponent
      },
      {
        path:'planets/:id', component:PlanetDetailsComponent
      },
      {
        path:'**', component:PeopleComponent
      }

    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwapiRoutingModule { }
