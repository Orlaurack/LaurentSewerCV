import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'timeline-element',
  templateUrl: './timeline-element.component.html',
  styleUrls: ['./timeline-element.component.scss']
})
export class TimelineElementComponent implements OnInit {

  @Input() startDate: string;
  @Input() endDate: string;
  @Input() title: string;
  @Input() inversed: boolean;
  @Input() haveDescritpion: boolean;
  @Input() first: boolean;
  active: boolean;

  constructor() {
    this.active = false;
  }

  ngOnInit(): void {
  }

}
