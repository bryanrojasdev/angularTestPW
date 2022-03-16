import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { People } from 'src/app/models/people.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input() search:string= '';
  @Output() searchEvent = new EventEmitter<string>();
  lastSearch:string[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  onEnter($event:any){
    this.searchEvent.emit($event);
    if($event!=''){
      
      if(this.lastSearch.length<=4){
        this.lastSearch.push($event);
      }
    }
   
    
  }
  searchItem($event:any){
    this.searchEvent.emit($event);
  }
 

}
