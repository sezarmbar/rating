import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule,JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceAppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AgmCoreModule } from '@agm/core';
import {MdButtonModule,MdInputModule, MdCheckboxModule,MdSidenavModule,MdMenuModule,MdChipsModule,MdProgressBarModule,MdTabsModule,MdIconModule,MdListModule} from '@angular/material';


// service
import { serivceModul } from './service/';
//pipe
import { ParkTablePipe } from './pages/haus-park/pipe';


import { SliderComponent } from './share/slider';
import { HomeComponent , DialogContent } from './pages/home';
import { HausTableComponent , HausParkComponent , HausMapComponent , DirectionsMapDirective , SideMapComponent , JsonPolyLineDirective} from './pages/haus-park';
import { RatingPageComponent } from './pages/rating/rating-page/rating-page.component';




@NgModule({
  declarations: [
        AppComponent,
    DialogContent,
    SliderComponent,
    HomeComponent,
    HausParkComponent,
    HausMapComponent,
    DirectionsMapDirective,
    SideMapComponent,
    JsonPolyLineDirective,
    HausTableComponent,
    RatingPageComponent

  ],
  imports: [
   BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule,MdSidenavModule,MdChipsModule,MdInputModule,MdProgressBarModule,MdMenuModule,MdTabsModule,MdIconModule,MdListModule,
    ServiceAppRoutingModule,
    ParkTablePipe,
    serivceModul,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDI4N7QdySwfP8aO0oWipZPbGKJHGAUI_M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
