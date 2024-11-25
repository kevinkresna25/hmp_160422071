import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { DexieService } from '../dexie.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
})
export class PastaPage implements OnInit {
  jenistampilan = 'accordion';
  pastas: any[] = [];
  allPastas: any[] = [];
  searchTerm: string = '';

  constructor(
    private foodservice: FoodserviceService,
    private dex: DexieService
  ) {}

  ngOnInit() {
    this.refreshList();
  }

  addtocart(id: number, name: string, price: number, num: number) {
    this.dex
      .addItem(id, name, price, num)
      .then(() => {
        alert('Item added successfully');
      })
      .catch((error) => {
        alert('Error adding item:' + error);
      });
  }

  searchItems() {
    const term = this.searchTerm.toLowerCase();
    if (!term) {
      this.pastas = this.allPastas;
      return;
    }

    this.pastas = this.allPastas.filter((pasta) =>
      pasta.name.toLowerCase().includes(term)
    );
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  refreshList() {
    this.foodservice.pastaList().subscribe((data) => {
      this.pastas = data;
      this.allPastas = data;
    });
  }

  ionViewWillEnter() {
    this.refreshList();
  }
}
