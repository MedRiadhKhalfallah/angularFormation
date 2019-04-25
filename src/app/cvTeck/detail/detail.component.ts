import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/personne.model';
import {EmbaucheServiceService} from '../../service/embauche-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personneDetail: Personne;

  constructor(private embaucheService: EmbaucheServiceService, private router: Router) {
  }

  ngOnInit() {
  }

  addEmbauche(embauche: Personne) {
    this.embaucheService.addEmbauche(embauche);
  }

  detailProfil(pers: Personne) {
    this.router.navigate(['cv', pers.id]);
  }

}
