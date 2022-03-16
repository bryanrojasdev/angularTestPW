import { Pipe, PipeTransform } from '@angular/core';
import { PlanetsService } from '../services/planets.service';

@Pipe({
  name: 'planet'
})
export class PlanetPipe implements PipeTransform {

  constructor(private svcPlanets:PlanetsService){

  }
  transform(value: string, ...args: unknown[]): unknown {
    
    return this.svcPlanets.getName(value);
  }

}
