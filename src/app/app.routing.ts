import { Routes, RouterModule } from '@angular/router';

import { PodcastPlayerComponent } from './podcast-player/podcast-player.component';
import { PodcastComponent } from './podcast/podcast.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'podcast-player', pathMatch: 'full'},
  {path: 'podcast-player', component: PodcastPlayerComponent,

    children: [
      { path: '', redirectTo: 'podcast', pathMatch: 'full'},
      {path: 'podcast', component: PodcastComponent }
    ]
  }

]

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
