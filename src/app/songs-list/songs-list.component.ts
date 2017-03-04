import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  constructor(private _elRef: ElementRef) { 
     
  }

  ngOnInit() {
    var ls = jQuery(this._elRef.nativeElement).find("#sortable");
    ls.sortable({
      update: function(event, ui) {
        var serial = ls.sortable("serialize", {key: "sort"});
        console.log(serial.toString());
      }, 
    });
  }
  
  ngAfterViewInit() {
   
  }

}
