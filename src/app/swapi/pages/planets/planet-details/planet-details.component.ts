import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  constructor(private svcPlanet:PlanetsService, private route: ActivatedRoute) { 

    this.isValidURL(this.route.snapshot.params['id']);
  }
  @Input() planet: any;

  ngOnInit(): void {
  }
  isValidURL(url: string) {
    if (url) {
      this.findPlanet(parseInt(url));
    } else {
      console.log('no es un url valido');
    }
  }
  findPlanet(url: number) {
    this.svcPlanet.loadData().forEach((planet) => {
      if (url == planet.id ) {
        this.planet = planet;
      }
    });
  }

}
