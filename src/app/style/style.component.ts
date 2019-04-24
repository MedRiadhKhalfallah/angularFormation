import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  pStyles = ['Times New Roman', 'Lucida Console', 'Courier New', 'Trebuchet MS'];
  styles = {'color': 'black', 'font-size': '12px', 'font-family': 'Times New Roman'};

  constructor() {
  }

  ngOnInit() {
  }
}
