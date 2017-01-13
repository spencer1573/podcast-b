import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  podcastOne: Object;
  // p: string;
  // podcastOne = json;
  podcasts: Object;

  constructor() {
    //// <reference path='./require.d.ts' />
    // this.podcastOne = require('json-loader!./AiA.json');

    // this.p = '20';

  }

  ngOnInit() {
    // console.log(this.podcastOne);
    console.log(this.podcastOne);
  }

}
