import { Component, OnInit, ViewChild, ElementRef, Pipe } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Song } from '../song';

declare var jQuery: any;

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  serial: string[];

  constructor(private _elRef: ElementRef, private af: AngularFire) { 
      this.items = af.database.list('/songs', {
        query:{
          orderByChild: 'displayOrder'
        }
      });
      this.serial = null;
     
  }

  ngOnInit() {
    var ls = jQuery(this._elRef.nativeElement).find("#sortable");
    ls.sortable({
      update: (event, ui) => {
        this.serial = ls.sortable("toArray");
        this.serial.forEach((value, index, array) => {
          var itemInfo = this.serial[index].split('=', 2);
          var oldDisplayOrder = itemInfo[0];
          var key = itemInfo[1];
          if (Number(oldDisplayOrder) != index) {
            this.af.database.object('/songs/'+key+'/displayOrder').set(index);
          }
        
        });
        console.log(this.serial);
      }, 
      handle: '.handle'
    });
  }
}
