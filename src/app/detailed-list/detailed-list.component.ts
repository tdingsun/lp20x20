import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private listService: ListService, private route:ActivatedRoute) { }

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

}
