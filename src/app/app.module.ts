import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { planetListReducer } from './state/actions/planet.reducer';
import { PlanetPipe } from './pipes/planet.pipe';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FilterPipe } from './pipes/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({planet:planetListReducer},{}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
