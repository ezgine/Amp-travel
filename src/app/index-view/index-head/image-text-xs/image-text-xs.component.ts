import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-text-xs',
  templateUrl: './image-text-xs.component.html',
  styleUrls: ['./image-text-xs.component.css']
})
export class ImageTextXsComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 100, 100, "Surf Day.Board and Wetsuits Included in Price!", 5, "Oaxaca", "../assets/images/travel/activity/surf-day.jpg"),
      new Product(2, 200, 200, "Discover Oaxaca's Electronic Music Scene with a Top DJ", 4, "Oaxaca", "../assets/images/travel/activity/discover-electronic-scene.jpg"),
      new Product(3, 300, 300, "Skateboard Around the City", 3, "Mexico City", "../assets/images/travel/activity/skateboard-around-city.jpg"),
      new Product(4, 400, 400, "Discover Oaxaca's Electronic Music Scene with a Top DJ", 2, "Oaxaca", "../assets/images/travel/activity/discover-electronic-scene.jpg"),
      new Product(5, 500, 500, "Skateboard Around the City", 1, "Mexico City", "../assets/images/travel/activity/skateboard-around-city.jpg"),
      new Product(6, 600, 600, "Skateboard Around the City", 0, "Mexico City", "../assets/images/travel/activity/skateboard-around-city.jpg")
    ];
    const myswiper3 = new Swiper('#swiper3', {
      autoplay : 5000,
      direction : 'horizontal',
      observer: true,
      grabCursor : true,
      effect : 'flip',
      autoplayDisableOnInteraction : false,
    });
  }

}

export class Product{
  constructor(
    public id:number,
    public price:number,
    public reviews:number,
    public title:string,
    public rating:number,
    public address:string,
    public imgadd:string
  ){}
}
