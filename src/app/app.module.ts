import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { AddSongComponent } from './add-song/add-song.component';
import { UploadSongComponent } from './upload-song/upload-song.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { AddShowComponent } from './add-show/add-show.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAK-_KOML1_mhCqz0DJQznToef-nDI2llY',
  authDomain: 'dmrscriptgen.firebaseapp.com',
  databaseURL: 'https://dmrscriptgen.firebaseio.com',
  storageBucket: 'dmrscriptgen.appspot.com',
  messagingSenderId: '35773705526'
};

const appRoutes: Routes = [
  {
    path: 'songs',
    component: SongsListComponent
  },
  {
    path: 'add-song',
    component: AddSongComponent
  },
  {
    path: 'upload',
    component: UploadSongComponent
  },
  {
    path: 'shows',
    component: ShowsListComponent
  },
  {
    path: 'add-show',
    component: AddShowComponent
  },
  {
    path: '',
    redirectTo: '/songs',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideNavComponent,
    SongsListComponent,
    AddSongComponent,
    UploadSongComponent,
    ShowsListComponent,
    AddShowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
