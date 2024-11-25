import { Component, OnInit } from '@angular/core';
import { DexieService, MyItem } from '../dexie.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  items: MyItem[] = [];
  totalQty: number = 0;
  totalPrice: number = 0;

  constructor(private dex: DexieService) {}

  async loadItems() {
    try {
      this.items = await this.dex.getAllItems();
      this.calculateTotals();
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

  decreaseNum(id: number) {
    this.dex
      .decreaseNum(id)
      .then(() => {
        this.loadItems();
      })
      .catch((error) => {
        alert('Error :' + error);
      });
  }

  calculateTotals() {
    this.totalQty = this.items.reduce((total, item) => total + item.num, 0);
    this.totalPrice = this.items.reduce((total, item) => total + item.price * item.num,0);
  }
}
