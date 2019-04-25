import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvServiceService} from '../service/cv-service.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Personne} from '../Model/personne.model';
import {isString} from 'util';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  id: number;
  personneDetail: Personne = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personneService: CvServiceService,
    private route: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );
    const listePersonne = this.personneService.getData();
    this.personneDetail = this.personneService.finPersById(this.id);
    // this.personneDetail = listePersonne.find(pers => pers.id == this.id);
    /*    listePersonne.forEach(personne => {
          console.log(isString(personne.id));
          console.log(isString(this.id));
          if (personne.id == this.id) {
            this.personneDetail = personne;
          }
        });*/
    if (this.personneDetail == null) {
      alert('id erreur');
      this.route.navigate(['cv']);
    }
  }

}
