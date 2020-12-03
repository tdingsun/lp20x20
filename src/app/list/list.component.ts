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
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick(name): void {
    let el = document.getElementById('watermark');
    el.style.filter = `blur(50px)`;
    this.router.navigate([`/${name}`]);
  }
}
