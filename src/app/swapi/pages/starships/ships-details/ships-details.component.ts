import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.css']
})
export class ShipsDetailsComponent implements OnInit {

  constructor(private svcStartShip:StarshipsService,private route: ActivatedRoute) {
    this.isValidURL(this.route.snapshot.params['id']);
   }

  @Input() ship: any;

  ngOnInit(): void {}
  isValidURL(url: string) {
    if (url) {
      this.findShip(parseInt(url));
    } else {
      console.log('no es un url valido');
    }
  }
  findShip(url: number) {
    this.svcStartShip.loadData().forEach((ship) => {
      if (url == ship.id ) {
        this.ship = ship;
      }
    });
  }

}
