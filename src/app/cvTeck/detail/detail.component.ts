import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/personne.model';
import {EmbaucheServiceService} from '../../service/embauche-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personneDetail: Personne;

  constructor(private embaucheService: EmbaucheServiceService) {
  }

  ngOnInit() {
  }

  addEmbauche(embauche: Personne) {
    this.embaucheService.addEmbauche(embauche);
  }

}
