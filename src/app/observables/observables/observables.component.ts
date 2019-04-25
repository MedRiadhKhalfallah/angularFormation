import {Component, OnInit} from '@angular/core';
import {observable, Observable} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  listImage = ['rotating_card_thumb3.png', 'rotating_card_thumb2.png', 'rotating_card_thumb.png', 'riadh.png', 'profile.png', 'med.png'];
  img = this.listImage[3];

  constructor() {
  }

  ngOnInit() {
    const observable = new Observable(
      (observer) => {
        let i = 0;
        setInterval(() => {
            /*
                        if (!i) {
                          observer.complete();
                        }
            */
            observer.next(i++);
          }, 1000
        );
      }
    );

    observable.subscribe(
      (val) => {
        let index = Number(val) % this.listImage.length;
        this.img = this.listImage[index];
      }
    );
  }

}
