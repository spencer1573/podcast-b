import { Component, OnInit } from '@angular/core';
import { podcastAngular } from '../podcasts-data/AiA';

@Component({
  selector: 'app-podcast-player',
  templateUrl: './podcast-player.component.html',
  styleUrls: ['./podcast-player.component.css']
})
export class PodcastPlayerComponent implements OnInit {
  // play: boolean;
  podcastName: any;
  podcasts: any;
  podcastImage: any;

  constructor() {
    // this.play = false;
    this.podcastName = '';
    this.podcasts = podcastAngular["items"];
    this.podcastImage = podcastAngular["feed"]["image"];

  }


  ngOnInit() {
    this.podcastName = podcastAngular["items"][0]["title"];
  }

}
