import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SongsListComponent } from './songs-list/songs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideNavComponent,
    SongsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
