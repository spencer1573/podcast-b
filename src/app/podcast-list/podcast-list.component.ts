import { Component, OnInit } from '@angular/core';
import { podcastAngular } from '../podcasts-data/AiA';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css']
})
export class PodcastListComponent implements OnInit {

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
