import {Injectable} from '@angular/core';
import {Personne} from '../Model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheServiceService {
  listeEmbauche: Personne[] = [];

  constructor() {
  }

  getData() {
    return this.listeEmbauche;
  }

  addEmbauche(personne: Personne) {
    this.listeEmbauche.push(personne);
  }
}
