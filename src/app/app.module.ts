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
    DetailComponent
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
