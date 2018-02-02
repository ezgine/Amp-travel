import { Injectable } from '@angular/core';

@Injectable()
export class ImgTextService {

  messages = [
    {id:1, price:100, reviews:100, title:"Surf Day.Board and Wetsuits Included in Price!", rating:5, address:"Oaxaca", imgadd:"../assets/images/travel/activity/surf-day.jpg"},
    {id:2, price:200, reviews:200, title:"Discover Oaxaca's Electronic Music Scene with a Top DJ", rating:4, address:"JinJiang", imgadd:"../assets/images/travel/activity/discover-electronic-scene.jpg"},
    {id:3, price:300, reviews:300, title:"Skateboard Around the City", rating:3, address:"XiaMen", imgadd:"../assets/images/travel/activity/skateboard-around-city.jpg"},
    {id:4, price:400, reviews:400, title:"Discover Oaxaca's Electronic Music Scene with a Top DJ", rating:2, address:"QuanZhou", imgadd:"../assets/images/travel/activity/discover-electronic-scene.jpg"},
    {id:5, price:500, reviews:500, title:"Skateboard Around the City", rating:1, address:"ZhangZhou", imgadd:"../assets/images/travel/activity/skateboard-around-city.jpg"},
    {id:6, price:600, reviews:600, title:"Surf Day.Board and Wetsuits Included in Price!", rating:0, address:"SanMing", imgadd:"../assets/images/travel/activity/surf-day.jpg"},
  ];

  constructor() { }

}
