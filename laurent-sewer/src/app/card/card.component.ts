import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() name: string;
  @Input() image: string;
  @Input() color: string;
  @Input() fgcolor: string;
  @Input() bkcolor: string;
  @Input() role: string;
  @Input() company: string;
  @Input() logo: string;
  @Input() linkedin: string;
  @Input() facebook: string;
  @Input() phone: string;
  @Input() mail: string;
  @Input() website: string;
  formatedPhone: string;
  toggleFlipped: boolean;
  constructor() {
    this.toggleFlipped = false;

  }

  ngOnInit(): void {
    if (this.phone !== undefined && this.phone.length > 0){
      this.formatedPhone = '+41' + (this.phone.replace(/\s/g, '')).substring(1);
    }
  }

}
