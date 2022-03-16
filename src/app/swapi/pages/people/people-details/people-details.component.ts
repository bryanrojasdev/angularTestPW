import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css'],
})
export class PeopleDetailsComponent implements OnInit {
  constructor(private svcPeople: PeopleService, private route: ActivatedRoute) {
    this.isValidURL(this.route.snapshot.params['id']);
  }
  @Input() people: any;

  ngOnInit(): void {}
  isValidURL(url: string) {
    if (url) {
      this.findPeople(parseInt(url));
    } else {
      console.log('no es un url valido');
    }
  }
  findPeople(url: number) {
    this.svcPeople.loadData().forEach((people) => {
      if (url == people.id ) {
        this.people = people;
      }
    });
  }
}
