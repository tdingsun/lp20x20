import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.css']
})
export class AllListsComponent implements OnInit {
  lists: List[] = [];

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.listService.getLists().subscribe({
      next: lists => {
        this.lists = lists;
      }
    })
  }

  onScroll($event) {
    let scrollAmount = document.querySelector('#lists-container').scrollLeft
    let el = document.getElementById('watermark');
    el.style.transform = `rotate3d(1, 1, 1, ${scrollAmount*0.075}deg)`;
  }

}
