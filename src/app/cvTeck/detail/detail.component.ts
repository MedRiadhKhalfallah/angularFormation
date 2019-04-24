import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personneDetail: Personne;

  constructor() {
  }

  ngOnInit() {
  }

}
