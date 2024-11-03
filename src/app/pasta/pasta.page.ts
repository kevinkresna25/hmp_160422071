import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

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

  constructor(private foodservice: FoodserviceService) {}

  ngOnInit() {
    this.foodservice.pastaList().subscribe((data) => {
      this.pastas = data;
      this.allPastas = data;
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
}
