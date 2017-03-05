import { Component, OnInit, Input } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Song } from '../song';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  song: Song;

  constructor(private af: AngularFire) {
    this.song = new Song();
  }

  ngOnInit() {
  }

  addSongAction(e) {
    console.log(this.song);
    this.af.database.list('songs').push(this.song);
  }

}
