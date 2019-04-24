import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TodoModule {

  name: string;
  tache: string;

  constructor(name: string = null, tache: string = null) {
    this.name = name;
    this.tache = tache;
  }
}
