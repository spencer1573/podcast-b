import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import { PodcastPlayerComponent } from './podcast-player/podcast-player.component';
import { PodcastComponent } from './podcast/podcast.component';
import { ROUTING } from './app.routing';

//import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PodcastPlayerComponent,
    PodcastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
//    RouterModule.forRoot(appRoutes),
    ROUTING,
    HttpModule
  ],
//  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
