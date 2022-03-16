import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  selectedPlanet: any;
  filterList='';
  planetList = this.svcPlantes.loadData()
  constructor(private svcPlantes: PlanetsService) { }

  ngOnInit(): void {
  
    
  }
  onChange($event: any) {
    this.selectedPlanet = $event;

  }

}
