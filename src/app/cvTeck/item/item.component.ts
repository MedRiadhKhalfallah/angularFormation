import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() sendDataToList = new EventEmitter();

  selectPersonne(personne) {
    this.sendDataToList.emit(personne);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
