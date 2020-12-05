import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LP20X20';
  constructor(private router:Router) {
  }

  onClick() {
    this.router.navigate([`/index`]);
  }
}


