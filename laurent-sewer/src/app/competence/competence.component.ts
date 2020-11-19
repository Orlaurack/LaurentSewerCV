import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss'],

})
export class CompetenceComponent implements OnInit {

  @Input() name: string;
  @Input() image: string;
  @Input() percentage: number;
  @Input() color: string;
  @Input() bkcolor = '#ffffff';
  @Input() fgcolor: string;
  @Input() description: string;

  toggleViewDescritpion: boolean;

  constructor() {
    this.toggleViewDescritpion = false;
    if (this.fgcolor === undefined){this.fgcolor = this.color; }
  }

  ngOnInit(): void {
  }

  click(){
    this.toggleViewDescritpion = !this.toggleViewDescritpion;
  }
}
