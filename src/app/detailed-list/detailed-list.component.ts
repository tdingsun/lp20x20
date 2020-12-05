import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-detailed-list',
  templateUrl: './detailed-list.component.html',
  styleUrls: ['./detailed-list.component.css']
})
export class DetailedListComponent implements OnInit, AfterViewInit {
  list: List = null;
  name: string = null;
  color: string = null;
  smallScreen: boolean = false;
  hoverNext: boolean = false;
  hoverPrevious: boolean = false;


  names: string[] = [
    "aayushi",
    "adrian",
    "aedan",
    "annabelle",
    "elias",
    "ellen",
    "greta",
    "ja-yoon",
    "kay",
    "kevin",
    "libby",
    "mac",
    "maria",
    "raina",
    "rohan",
    "sara",
    "shingo",
    "theia",
    "tiger",
    "wen"
  ]

  
  constructor(private listService: ListService, private router:Router, private route:ActivatedRoute) { }
  ngOnInit(): void {
    let el = document.getElementById('watermark-img');
    let width = window.innerWidth;
    if(width > 580){
      el.style.filter = `blur(100px)`;
    } else {
      el.style.visibility = 'hidden';
      this.smallScreen = true;
    }

    this.route.params.subscribe(val => {
      this.listService.getList(this.route.snapshot.params['name']).subscribe({
        next: list => {
          this.list = list;
          this.name = list.name;
          this.color = list.color;
          this.switchHeaderColor(list.color);
        }
      })
    });
  }

  ngAfterViewInit(): void {
    this.initYouTubeVideos();
  }

  switchHeaderColor(color){
    document.getElementById('header').style.color = color;
  }

  onPrevious(name): void {
    let i = this.names.indexOf(name.toLowerCase());
    let previousName = "index";
    if(i == 0){
      previousName = this.names[this.names.length - 1];
    } else {
      previousName = this.names[i- 1];
    }
    this.router.navigate([`/${previousName}`]);
  }

  onNext(name): void {
    let i = this.names.indexOf(name.toLowerCase());
    let nextName = "index";
    if(i == this.names.length - 1){
      nextName = this.names[0];
    } else {
      nextName = this.names[i + 1];
    }
    this.router.navigate([`/${nextName}`]);
  }

  labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute(
      'src',
      'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0'
    );
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('modestbranding', '1');
    iframe.setAttribute('controls', '0');
    iframe.setAttribute('rel', '0');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    );
    div.parentNode.replaceChild(iframe, div);
  }


  initYouTubeVideos() {
    var playerElements = document.getElementsByClassName('youtube-player');
    if(playerElements.length == 0){
      setTimeout(this.initYouTubeVideos, 250);
    } else {
      for (var n = 0; n < playerElements.length; n++) {
        var videoId = playerElements[n].id;
        var div = document.createElement('div');
        div.setAttribute('data-id', videoId);
        var thumbNode = document.createElement('img');
        
        let videoIdNoMaxRes = ["0146f9YwCjM", "I8t_EEPJdFU"];
        if(videoIdNoMaxRes.includes(videoId)){
          thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
        } else {
          thumbNode.src = '//i.ytimg.com/vi/ID/maxresdefault.jpg'.replace('ID', videoId);
        }

        div.appendChild(thumbNode);
        var playButton = document.createElement('div');
        playButton.setAttribute('class', 'play');
        div.appendChild(playButton);
        div.onclick = (e) => {
          this.labnolIframe(e.currentTarget);
        };
        playerElements[n].appendChild(div);
      }
    }

  }
}