import { Component, OnInit } from '@angular/core';
import { DexieService, MyItem } from '../dexie.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  items: MyItem[] = [];

  constructor(private dex: DexieService) {}

  async loadItems() {
    try {
      this.items = await this.dex.getAllItems();
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }

  ngOnInit() {
    this.loadItems();
  }

  increaseNum(id: number) {
    this.dex
      .increaseNum(id)
      .then(() => {
        this.loadItems();
      })
      .catch((error) => {
        alert('Error :' + error);
      });
  }
}
