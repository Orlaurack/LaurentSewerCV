import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('video', { static: false }) video: ElementRef;

  title = 'laurent-sewer';
  constructor(){
  }
}
