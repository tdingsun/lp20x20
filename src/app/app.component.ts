import { Component, OnInit } from '@angular/core';
import { List } from '../app/list';
import { ListService } from '../app/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lp20x20';
  constructor() {
  }
  
  scrollRight() {
    console.log("hello");
    document.querySelector('#lists-container').scrollLeft += 500;
  }


}


