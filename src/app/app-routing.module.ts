import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./swapi/swapi.module').then(module=>module.SwapiModule)
  },
  {
    path:'**',
    loadChildren:()=> import('./swapi/swapi.module').then(module=>module.SwapiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
