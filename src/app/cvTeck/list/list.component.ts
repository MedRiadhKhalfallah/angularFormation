import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne.model';
import {CvServiceService} from '../../service/cv-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personnes: Personne[] = [];
  @Output() sendPersoneToCD = new EventEmitter();

  constructor(private cvService: CvServiceService, private route: Router) {
  }

  getPersonneFromItem(personne) {
    this.sendPersoneToCD.emit(personne);
  }

  ngOnInit() {
    this.personnes = this.cvService.getData();
  }

  goTodo() {
    this.route.navigate(['todo']);
  }


}
