import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CvComponent} from './cvTeck/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {DetailCvComponent} from './detail-cv/detail-cv.component';
import {FirstComponent} from './first/first.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {ObservablesComponent} from './observables/observables/observables.component';

const routes: Routes = [
  // {path: '', redirectTo: 'cv', pathMatch: 'full'},
  {path: '', component: ObservablesComponent},
  {
    path: 'cv', component: FirstComponent, children: [
      {path: '', component: CvComponent},
      {path: ':id', component: DetailCvComponent}

    ]
  },
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
