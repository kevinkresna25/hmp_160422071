import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodserviceService {
  pastas = [];
  constructor(private http: HttpClient) {}

  link = 'https://ubaya.xyz/hybrid/160422071/';

  pastaList(): Observable<any> {
    return this.http.get(this.link + 'pastas.php');
  }

  pastaDetail(id: number): Observable<any> {
    return this.http.get(this.link + 'pasta_detail.php?id=' + id);
  }

  addPasta(
    p_name: string,
    p_url: string,
    p_description: string,
    p_price: number,
    p_spicy: boolean
  ) {
    // this.pastas.push({
    //   name: p_name, url: p_url,
    //   description: p_description, price: p_price,
    //   spicy: p_spicy
    // })
  }
}
