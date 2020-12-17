import { Component, Input, OnInit } from '@angular/core';
import { List } from '../list';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  hover: boolean = false;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    if (this.list.color == "#979143"){ // color hack for tiger
      this.list.color = "darkkhaki";
    }
    if (this.list.color == "#6fa96f"){ // color hack for maria
      this.list.color = "darkseagreen";
    }
  }
  
  onClick(name): void {
    this.router.navigate([`/${name}`]);
  }

}
