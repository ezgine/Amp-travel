import { Component, OnInit } from '@angular/core';
import {ImgTextService} from "../../services/img-text.service";

@Component({
  selector: 'app-travel-imgtext',
  templateUrl: './travel-imgtext.component.html',
  styleUrls: ['./travel-imgtext.component.css']
})
export class TravelImgtextComponent implements OnInit {

  xxx;

  constructor(private mailService: ImgTextService) { }

  ngOnInit() {
    this.xxx = this.mailService.messages;
  }

}
