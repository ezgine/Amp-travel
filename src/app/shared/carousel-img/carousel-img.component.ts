import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-img',
  templateUrl: './carousel-img.component.html',
  styleUrls: ['./carousel-img.component.css']
})
export class CarouselImgComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const myswiper1 = new Swiper('#swiper1', {
      effect : 'fade',
      autoplay: 3000,
      autoplayDisableOnInteraction: false,
      observer: true,
      observeParents: true,
      parallax : true,
      roundLengths : true,
    });
  }

}
