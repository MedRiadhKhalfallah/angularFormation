import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-therd',
  templateUrl: './therd.component.html',
  styleUrls: ['./therd.component.css']
})
export class TherdComponent implements OnInit {
  @Input() titreCard: string;
  personne = {
    name: 'mohamed riadh khalfallah',
    profession: 'ING',
    disc: 'SOFRECOM TUNISIE => MATRIX'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
