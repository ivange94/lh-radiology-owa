import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  template: `    
    <a href="#"><img src="{{logoPath}}" alt="LibreHealth Logo"> <span class="brandName">LibreHealth Radiology</span></a>
  `,
  styles: [`    
    a:-webkit-any-link {
      text-decoration: none;
    }
  `]
})
export class BrandComponent implements OnInit {

  logoPath = '/openmrs/owa/radiology/assets/logo.png';

  constructor() { }

  ngOnInit() {
  }

}
