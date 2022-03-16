import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiRoutingModule } from './swapi-routing.module';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { AlturaPipe } from '../pipes/altura.pipe';
import { NavePipe } from '../pipes/nave.pipe';
import { PlanetPipe } from '../pipes/planet.pipe';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { PlanetDetailsComponent } from './pages/planets/planet-details/planet-details.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { ShipsDetailsComponent } from './pages/starships/ships-details/ships-details.component';




@NgModule({
  declarations: [
    PeopleComponent,
    PlanetsComponent,
    StarshipsComponent,
    PeopleDetailsComponent,
    PlanetDetailsComponent,
    ShipsDetailsComponent,
    AlturaPipe,
    NavePipe,
    PlanetPipe,
    FilterPipe,
    NavbarComponent,
    SearchbarComponent,
  ],
  imports: [
    CommonModule,
    SwapiRoutingModule,
    FormsModule
  ]
  
})
export class SwapiModule { }
