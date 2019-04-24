import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  color = 'black';
  tttt: string;
  title = 'Profile';

  constructor() {
  }

  ngOnInit() {
  }

  colorFn(varColor) {
    this.color = varColor.value;
  }
}
