import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompetenceComponent } from './competence/competence.component';
import { ElementComponent } from './element/element.component';
import { CardComponent } from './card/card.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineElementComponent } from './timeline/timeline-element/timeline-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetenceComponent,
    ElementComponent,
    CardComponent,
    TimelineComponent,
    TimelineElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
