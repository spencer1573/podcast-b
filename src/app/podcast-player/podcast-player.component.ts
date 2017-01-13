import { Component, OnInit } from '@angular/core';
import { podcastAngular } from '../podcasts-data/AiA';

@Component({
  selector: 'app-podcast-player',
  templateUrl: './podcast-player.component.html',
  styleUrls: ['./podcast-player.component.css']
})
export class PodcastPlayerComponent implements OnInit {
  // play: boolean;
  podcastName: string;

  constructor() {
    // this.play = false;
    this.podcastName = '';

  }


  ngOnInit() {
    //this.podcastName = podcastAngular[0].title;
  }

}
