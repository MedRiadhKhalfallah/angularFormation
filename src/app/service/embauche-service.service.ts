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
    const index = this.listeEmbauche.indexOf(personne);
    if (index === -1) {
      this.listeEmbauche.push(personne);

    } else {
      alert('vous deja selecctionné ce profil');
    }
  }
}
