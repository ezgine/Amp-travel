import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-panel',
  templateUrl: './travel-panel.component.html',
  styleUrls: ['./travel-panel.component.css']
})
export class TravelPanelComponent implements OnInit {

  panelOpen: boolean = false;
  check: boolean = false;
  value: number = 0;

  test1: boolean = false;
  test2: boolean = false;
  test3: boolean = false;
  test4: boolean = false;
  test5: boolean = false;
  test6: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  checkChange() {
    this.check = true;
  }
  checkChange2() {
    this.check = false;
    this.test1 = false;
    this.test2 = false;
    this.test3 = false;
    this.test4 = false;
    this.test5 = false;
    this.test6 = false;
  }

  test(num) {
    if (num == 1) {
      this.test1 = !this.test1;
    } else if (num == 2) {
      this.test2 = !this.test2;
    } else if (num == 3) {
      this.test3 = !this.test3;
    } else if (num == 4) {
      this.test4 = !this.test4;
    } else if (num == 5) {
      this.test5 = !this.test5;
    } else if (num == 6) {
      this.test6 = !this.test6;
    }
  }

}
