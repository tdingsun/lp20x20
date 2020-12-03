import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lp20x20';
  constructor(private router:Router, private route:ActivatedRoute) {
  }

  onClick() {
    let el = document.getElementById('watermark');
    el.style.filter = `blur(10px)`;
    this.router.navigate([`/index`]);
  }
}


