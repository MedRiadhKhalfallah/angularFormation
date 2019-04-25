import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {FormsModule} from '@angular/forms';
import { TherdComponent } from './therd/therd.component';
import { ColorFisComponent } from './color-fis/color-fis.component';
import { CvComponent } from './cvTeck/cv/cv.component';
import { ListComponent } from './cvTeck/list/list.component';
import { ItemComponent } from './cvTeck/item/item.component';
import { DetailComponent } from './cvTeck/detail/detail.component';
import { StyleComponent } from './style/style.component';
import { ExergueDirective } from './directiveAtt/exergue.directive';
import { ImagePipePipe } from './pipe/image-pipe.pipe';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './cvTeck/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TherdComponent,
    ColorFisComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    StyleComponent,
    ExergueDirective,
    ImagePipePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    FooterComponent,
    DetailCvComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
