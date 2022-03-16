import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  selectedPeople: any;
  filterList='';
  peopleList = this.svcPeople.loadData();
  constructor(private svcPeople: PeopleService) {}

  ngOnInit(): void {
   
  }

  loadData() {}
  onChange($event: any) {
    this.selectedPeople = $event;

  }
}
