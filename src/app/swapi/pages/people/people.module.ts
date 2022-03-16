import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailsComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class PeopleModule { }
