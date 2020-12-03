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
  showInfo: boolean = true;
  constructor(private listService: ListService) {
  }

  ngOnInit() {
    let el = document.getElementById('watermark-img');
    el.style.filter = `blur(5px)`;
    this.listService.getLists().subscribe({
      next: lists => {
        this.lists = lists;
      }
    })
  }

  onScroll($event) {
    let width = window.innerWidth;
    let scrollAmount = document.querySelector('#lists-container').scrollLeft

    if(width < 500){
      let el = document.getElementById('watermark');
      el.style.transform = `rotate3D(1, 1, 1, ${scrollAmount*0.075}deg)`;
    } else {
      let el = document.getElementById('watermark-img');
      el.style.transform = `rotate(${scrollAmount*0.075}deg)`;
    }
  }

  onClick() {
    document.querySelector('#info').toggleAttribute("hidden");
    setTimeout(function(){
      document.querySelector('#info').toggleAttribute("hidden");
    }, 2000);
  }

}
