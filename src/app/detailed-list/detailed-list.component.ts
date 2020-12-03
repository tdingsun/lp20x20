import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-detailed-list',
  templateUrl: './detailed-list.component.html',
  styleUrls: ['./detailed-list.component.css']
})
export class DetailedListComponent implements OnInit {
  list: List = null;
  name: string = null;

  names: string[] = [
    "aayushi",
    "adrian",
    "aedan",
    "andreas",
    "annabelle",
    "elias",
    "ellen",
    "ja-yoon",
    "kay",
    "kevin",
    "libby",
    "mac",
    "maria",
    "raina",
    "rohan",
    "sara",
    "shingo",
    "theia",
    "tiger",
    "wen"
  ]
  constructor(private listService: ListService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.listService.getList(this.route.snapshot.params['name']).subscribe({
        next: list => {
          this.list = list;
          this.name = list.name;
        }
      })
    });
  }

  onPrevious(name): void {
    let i = this.names.indexOf(name.toLowerCase());
    let previousName = "index";
    if(i == 0){
      previousName = this.names[this.names.length - 1];
    } else {
      previousName = this.names[i- 1];
    }
    this.router.navigate([`/${previousName}`]);
  }

  onNext(name): void {
    let i = this.names.indexOf(name.toLowerCase());
    let nextName = "index";
    if(i == this.names.length - 1){
      nextName = this.names[0];
    } else {
      nextName = this.names[i + 1];
    }
    this.router.navigate([`/${nextName}`]);
  }
  
}
