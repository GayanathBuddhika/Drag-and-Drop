import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drag-and-drp';
  artists = [
    'Artist I - Davido',
    'Artist II - Wizkid',
    'Artist III - Burna Boy',
    'Artist IV - Kiss Daniel',
    'Artist V - Mayorkun',
    'Artist VI - Mr. Eazi',
    'Artist VII - Tiwa Savage',
    'Artist VIII - Blaqbonez',
    'Artist IX - Banky W',
    'Artist X - Yemi Alade',
    'Artist XI - Perruzi',
    'Artist XII - Seyi Shay',
    'Artist XIII - Teni'
  ];

  // sddrop($event: CdkDragDrop<{title: string, poster: string}[]>) {
  //   moveItemInArray(
  //     this.artists,
  //     $event.previousIndex,
  //     $event.currentIndex
  //   );
  // }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.artists, event.previousIndex, event.currentIndex);
    console.log(this.artists);
    console.log("currentIndex", event.currentIndex);
    }

    ondelete(event){
      console.log("delete index", event);
      this.artists =this.artists.filter((val, i) => i !== event);
    }
}
