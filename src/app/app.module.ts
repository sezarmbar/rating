import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ServiceAppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


import {
  MdButtonModule,
  MdInputModule,
  MdCheckboxModule,
  MdSidenavModule,
  MdMenuModule,
  MdChipsModule,
  MdProgressBarModule,
  MdTabsModule,
  MdIconModule,
  MdListModule,
  MdDialogModule
} from '@angular/material';

// service
import { RatingPageComponent, RatingService} from './pages/rating';
import { AdminRatingPageComponent } from './pages/rating/admin-rating-page/admin-rating-page.component';

@NgModule({
  declarations: [
    AppComponent,
     RatingPageComponent,
     AdminRatingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdChipsModule,
    MdInputModule,
    MdProgressBarModule,
    MdMenuModule,
    MdTabsModule,
    MdIconModule,
    MdListModule,
    MdDialogModule,
    ServiceAppRoutingModule,
    JsonpModule
  ],
  providers: [RatingService],
  bootstrap: [AppComponent]
})
export class AppModule {}