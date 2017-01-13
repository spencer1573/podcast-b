import { Component, OnInit } from '@angular/core';
import { podcastAngular } from '../podcasts-data/AiA';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(podcastAngular);
  }

}
