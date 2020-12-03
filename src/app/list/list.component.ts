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
  detailed:boolean = false;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick(name): void {
    this.router.navigate([`/${name}`]);
  }

}
