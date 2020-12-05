import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() color: string;
  @Input() name: string;

  hoverNext: boolean = false;
  hoverPrevious: boolean = false;

  names: string[] = [
    "aayushi",
    "adrian",
    "aedan",
    "annabelle",
    "elias",
    "ellen",
    "greta",
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

  constructor(private router:Router) { }

  ngOnInit(): void {
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
