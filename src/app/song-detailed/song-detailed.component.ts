import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../list';

@Component({
  selector: 'app-song-detailed',
  templateUrl: './song-detailed.component.html',
  styleUrls: ['./song-detailed.component.css']
})
export class SongDetailedComponent implements OnInit {
  @Input() song: Song;
  @Input() index: number;
  @Input() smallScreen: boolean = false;
  @Input() color: string;

  hover:boolean = false;

  videoIdNoMaxRes:string[] = [
    "0146f9YwCjM", 
    "I8t_EEPJdFU",
    "vhDnWLfm07o",
    "hsm4poTWjMs",
    "5wmfXve11rM",
    "AJOVf0DH4x4",
    "iRgLhEGEetc",
    "qJZe5YGXQzI",
    "-b7NRg4hoD0",
    "BFhy52WtO3o",
    "lwXo4H1zXpI",
    "uhi8m8f5SPo",
    "qwIRY1dUYvA",
    "dcQHuCjfb5s",
    "U4S-z5Z3yic"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getSrc(link): string {
    if(this.videoIdNoMaxRes.includes(link)){
      return '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', link);
    } else {
      return '//i.ytimg.com/vi/ID/maxresdefault.jpg'.replace('ID', link);
    }
  }

  doIFrame(link) {
    var iframe = document.createElement('iframe');
    iframe.className = 'youtube-iframe';
    iframe.setAttribute(
      'src',
      'https://www.youtube.com/embed/' + link + '?autoplay=1&rel=0'
    );
    if(link === "Hh9iFc5Sdso") { //astra king hack
      iframe.setAttribute(
        'src',
        'https://www.youtube.com/embed/' + link + '?start=175&autoplay=1&rel=0'
      );
    }
    if(link === "Pu0akEwsY2Y") { //roy blair hack
      iframe.setAttribute(
        'src',
        'https://www.youtube.com/embed/' + link + '?start=608&autoplay=1&rel=0'
      );
    }
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('modestbranding', '1');
    iframe.setAttribute('controls', '0');
    iframe.setAttribute('rel', '0');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    );
    var div = document.getElementById(link);
    div.replaceChild(iframe, div.firstChild);
  }

}
