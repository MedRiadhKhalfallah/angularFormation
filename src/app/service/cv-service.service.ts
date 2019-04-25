import {Injectable} from '@angular/core';
import {Personne} from '../Model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  personneData: Personne[];

  constructor() {
    this.personneData = [
      new Personne(1, 'KHALFALLAH', 'Med Riadh', 'ING', 'riadh.png', 123456879, 26),
      new Personne(2, 'KH', 'Riadh', 'ETU', '', 123456789, 26)
    ];
  }

  getData() {
    return this.personneData;
  }
  finPersById(id) {
    return this.personneData.find(pers => pers.id === Number(id));  }
}
