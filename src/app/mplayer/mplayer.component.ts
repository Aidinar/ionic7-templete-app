import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

interface RecordEl{
  name: string
  url: string
}

@Component({
  selector: 'app-mplayer',
  templateUrl: './mplayer.component.html',
  styleUrls: ['./mplayer.component.scss'],
})
export class MplayerComponent  implements OnInit {
  
  records: RecordEl[] = [
    {name: "uytuyt", url: "hhkijkjh"},
    {name: "uytuyt", url: "hhkijkjh"},
  ]
  public progress = 0;

  constructor() {
    setInterval(() => {
      this.progress += 0.001;
      if (this.progress > 1) {
        this.progress = 0;
      }
    }, 100);
  }
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  ngOnInit() {}


}