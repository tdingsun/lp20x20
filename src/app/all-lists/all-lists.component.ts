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
    document.getElementById('header').style.color = 'dodgerblue';

    let el = document.getElementById('watermark-img');
    let width = window.innerWidth;
    el.style.filter = `blur(5px)`;
    if(width < 580){
      el.style.visibility = 'visible';
    }
    this.listService.getLists().subscribe({
      next: lists => {
        this.lists = lists;
      }
    })
  }

  onScroll($event) {
    let width = window.innerWidth;
    let scrollAmount = document.querySelector('#lists-container').scrollLeft

    if(width < 580){
      let el = document.getElementById('watermark');
      el.style.transform = `rotate3D(1, 1, 1, ${scrollAmount*0.075}deg)`;
    } else {
      let el = document.getElementById('watermark-img');
      el.style.transform = `rotate(${scrollAmount*0.075}deg)`;
    }
  }

  onClick() {
    document.querySelector('#easter-egg').toggleAttribute("hidden");
    setTimeout(function(){
      document.querySelector('#easter-egg').toggleAttribute("hidden");
    }, 1500);
  }

}
