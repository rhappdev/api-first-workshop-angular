import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  items: Array<any>;
  hasError: boolean;
  constructor(
    private router: Router,
    public itemService: ItemService
  ) {}

  ionViewDidEnter() {
    this.itemService.getItems().subscribe((items: Array<any>) => {
      this.items = items;
    }, (e) => {this.handleError(e); });
  }
  handleError(e) {

    this.hasError = true;
  }

}
