import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { ShipsDetailsComponent } from './ships-details/ships-details.component';



@NgModule({
  declarations: [
    StarshipsComponent,
    ShipsDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StarshipsModule { }
