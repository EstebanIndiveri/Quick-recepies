import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 public text = 'default';
  constructor() {}

  onchagetext() {
    this.text = 'Changed';
  }
}
