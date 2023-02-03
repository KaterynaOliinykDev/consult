import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent {

  images=[
    '/assets/slider/carousel-1.jpg',
    '/assets/slider/carousel-2.jpg',
  ]

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.pauseOnHover = true;
  }
}
