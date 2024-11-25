import { Injectable } from '@angular/core';
import Dexie from 'dexie';

export interface MyItem {
  id: number;
  name: string;
  price: number;
  num: number;
}

@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  myStore: Dexie.Table<MyItem, number>;

  constructor() {
    super('MyDatabase');
    this.version(1).stores({
      myStore: '++id, name',
    });

    this.myStore = this.table('myStore');
  }

  async addItem(
    id: number,
    name: string,
    price: number,
    num: number
  ): Promise<void> {
    const existingItem = await this.myStore.where('id').equals(id).first();

    if (existingItem) {
      // Item already exists, call increaseNum
      await this.increaseNum(existingItem.id);
    } else {
      await this.myStore.add({ id, name, price, num });
    }
  }

  async removeItem(itemId: number): Promise<void> {
    await this.myStore.delete(itemId);
  }

  async getAllItems(): Promise<any[]> {
    return this.myStore.toArray();
  }

  async increaseNum(itemId: number): Promise<void> {
    // Get the item from the database
    const item = await this.myStore.get(itemId);

    // If the item exists, increase the 'num' property by 1
    if (item) {
      item.num += 1;
      // Update the item in the database
      await this.myStore.update(itemId, { num: item.num });
    }
  }

  async decreaseNum(itemId: number): Promise<void> {
    const item = await this.myStore.get(itemId);
  
    if (item) {
      // jika item lebih dari 1
      if (item.num > 1) {
        await this.myStore.update(itemId, { num: item.num - 1 });
      } else {
        await this.removeItem(itemId);
      }
    } else {
      throw new Error(`Item with ID ${itemId} not found.`);
    }
  }
}
