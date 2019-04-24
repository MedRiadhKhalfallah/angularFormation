import {Component, OnInit} from '@angular/core';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personne: Personne;

  constructor() {
  }

  ngOnInit() {
  }

  getPersonneFromListe(personne) {
    this.personne = personne;
  }

}
