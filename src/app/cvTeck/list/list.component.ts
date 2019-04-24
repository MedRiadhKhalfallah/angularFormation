import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personnes: Personne[] = [];
  @Output() sendPersoneToCD = new EventEmitter();

  constructor() {
    this.personnes = [
      new Personne(1, 'KHALFALLAH', 'Med Riadh', 'ING', 'riadh.png', 123456879, 26),
      new Personne(2, 'KH', 'Riadh', 'ETU', 'med.png', 123456789, 26)
    ];
  }

  getPersonneFromItem(personne) {
this.sendPersoneToCD.emit(personne);
  }

  ngOnInit() {
  }

}
