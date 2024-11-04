import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editpasta',
  templateUrl: './editpasta.page.html',
  styleUrls: ['./editpasta.page.scss'],
})
export class EditpastaPage implements OnInit {
  id = 0;
  e_url = '';
  e_name = '';
  e_desc = '';
  e_spicy = false;
  e_price = 0;
  arrPrice: number[] = []; // isi array select
  public alertButtons = ['OK'];

  constructor(
    private route: ActivatedRoute,
    private foodservice: FoodserviceService,
    private router: Router
  ) {
    this.arrPrice = this.generateNumberOptions(30000, 50000, 2000);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['index']; //penamaan params index tergantung dari app-routing
      //panggil function detail untuk mengisi form update
      this.foodservice.pastaDetail(this.id).subscribe((data) => {
        this.e_name = data.name;
        this.e_desc = data.desc;
        this.e_price = data.price;
        this.e_url = data.url;
        this.e_spicy = data.e_spicy;
      });
    });
  }

  generateNumberOptions(start: number, end: number, step: number): number[] {
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i); //menambahkan dibelakang array
    }
    return options;
  }

  updatepasta() {
    this.foodservice
      .updatePasta(
        this.id,
        this.e_name,
        this.e_url,
        this.e_desc,
        this.e_price,
        this.e_spicy
      )
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('Success');
        } else {
          alert(response.message);
        }
      });
    this.router.navigate(['/pasta']);
  }
}
