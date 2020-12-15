import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SongComponent } from './song/song.component';
import { SafePipe } from './safe.pipe';
import { DetailedListComponent } from './detailed-list/detailed-list.component';
import { AllListsComponent } from './all-lists/all-lists.component';
import { SongDetailedComponent } from './song-detailed/song-detailed.component';
import { NavComponent } from './nav/nav.component';
import { NoHyphenPipe } from './no-hyphen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SongComponent,
    SafePipe,
    DetailedListComponent,
    AllListsComponent,
    SongDetailedComponent,
    NavComponent,
    NoHyphenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
