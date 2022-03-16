import { Component, OnInit } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {
  selectedShip: any;
  filterList = '';
  shipsList = this.svcStarships.loadData();
  constructor(private svcStarships: StarshipsService) {

  }

  ngOnInit(): void {}
  onChange($event: any) {
    this.selectedShip = $event;

  }
}
