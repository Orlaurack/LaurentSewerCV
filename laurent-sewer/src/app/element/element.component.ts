import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  @Input() name: string;
  @Input() image: string;
  @Input() percentage: number;
  @Input() color: string;
  @Input() bkcolor = '#ffffff';
  @Input() fgcolor: string;
  @Input() description: string;

  toggleViewDescritpion: boolean;
  constructor() { }

  ngOnInit(): void {
  }


  click(){
    if (this.description !== undefined) {
    this.toggleViewDescritpion = !this.toggleViewDescritpion;
    }
  }
}
