import {Component, OnInit} from '@angular/core';
import {EmbaucheServiceService} from '../../service/embauche-service.service';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  listeEmbauche: Personne[] = [];

  constructor(private embaucheService: EmbaucheServiceService) {
  }

  ngOnInit() {
    this.listeEmbauche = this.embaucheService.getData();
  }

}
