import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('name', p_name);
    body.set('desc', p_description);
    body.set('url', p_url);
    body.set('price', p_price.toString());
    const urlEncodedData = body.toString();
    return this.http.post(this.link + 'new_pasta.php', urlEncodedData, { headers });
  }

  updatePasta(
    p_id: number,
    p_name: string,
    p_url: string,
    p_description: string,
    p_price: number,
    p_spicy: boolean
  ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('id', p_id.toString());
    body.set('name', p_name);
    body.set('desc', p_description);
    body.set('url', p_url);
    body.set('price', p_price.toString());
    const urlEncodedData = body.toString();
    return this.http.post(this.link + 'update_pasta.php', urlEncodedData, { headers });
  }

  deletePasta(p_id: number) {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const body = new URLSearchParams();

    body.set('id', p_id.toString());
    const urlEncodedData = body.toString();
    return this.http.post(this.link + 'delete_pasta.php', urlEncodedData, { headers });
  }

  addInstruction(p_id: number, step: number, instruction: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const body = new URLSearchParams();

    body.set('id', p_id.toString());
    body.set('step', step.toString());
    body.set('instruction', instruction.toString());
    const urlEncodedData = body.toString();
    return this.http.post(this.link + 'new_instruction.php', urlEncodedData, { headers });
  }
}
