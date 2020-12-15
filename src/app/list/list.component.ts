import { Component, Input } from '@angular/core';
import { List } from '../list';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list: List;
  hover: boolean = false;
  constructor(private router:Router, private route:ActivatedRoute) { }

  onClick(name): void {
    this.router.navigate([`/${name}`]);
  }

}
