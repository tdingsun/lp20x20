import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-detailed-list',
  templateUrl: './detailed-list.component.html',
  styleUrls: ['./detailed-list.component.css']
})
export class DetailedListComponent implements OnInit {
  list: List = null;
  name: string = null;
  color: string = null;
  smallScreen: boolean = false;
  
  constructor(private listService: ListService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    let el = document.getElementById('watermark-img');
    let width = window.innerWidth;
    if(width > 580){
      el.style.filter = `blur(150px)`;
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
          if(document.getElementById('list-container') != null){
            document.getElementById('list-container').scrollTop = 0;
          }
        }
      })
    });
  }

  switchHeaderColor(color){
    document.getElementById('header').style.color = color;
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
    console.log("loop");

    var playerElements = document.getElementsByClassName('youtube-player');
    if(playerElements.length == 0){
      setTimeout(this.initYouTubeVideos, 250);
    } else {

      for (var n = 0; n < playerElements.length; n++) {
        var videoId = playerElements[n].id;

        console.log(videoId);

        var div = document.createElement('div');
        div.setAttribute('data-id', videoId);
        var thumbNode = document.createElement('img');
        


        div.appendChild(thumbNode);
        var playButton = document.createElement('div');
        playButton.setAttribute('class', 'play');
        playButton.innerHTML = "▶&#xFE0E;";
        div.appendChild(playButton);
        div.onclick = (e) => {
          this.labnolIframe(e.currentTarget);
        };
        playerElements[n].appendChild(div);
      }
    }

  }
}