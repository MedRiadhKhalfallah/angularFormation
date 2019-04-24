import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color-fis',
  templateUrl: './color-fis.component.html',
  styleUrls: ['./color-fis.component.css']
})
export class ColorFisComponent implements OnInit {
  message = 'message';
  @Input() color = 'black';
  @Output() sendDataToDad = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  sendData() {
    this.sendDataToDad.emit(this.message);
  }

}
