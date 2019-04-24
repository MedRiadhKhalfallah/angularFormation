import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  isShown = false;
  message = 'afficher';

  constructor() {
  }

  ngOnInit() {
  }

  getIsShown() {
    return this.isShown;
  }

  toogle() {
    this.isShown = !this.isShown;
    (this.message === 'afficher') ? this.message = 'cacher' : this.message = 'afficher';
  }

}
