import { Component, OnInit } from '@angular/core';
import {ImgTextService} from "../../services/img-text.service";

@Component({
  selector: 'app-travel-nav',
  templateUrl: './travel-nav.component.html',
  styleUrls: ['./travel-nav.component.css']
})
export class TravelNavComponent implements OnInit {


  constructor(private imgtextservice: ImgTextService) {
  }

  ngOnInit() {
  }

}
