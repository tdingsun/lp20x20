import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../list';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input() song:Song;
  @Input() index:number;
  @Input() detailed:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
