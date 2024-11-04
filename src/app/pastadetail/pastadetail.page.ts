import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
})
export class PastadetailPage implements OnInit {
  index = 0;
  id = 0
  pasta: any = {};

  constructor(private route: ActivatedRoute, private foodservice: FoodserviceService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.foodservice.pastaDetail(params['index']).subscribe((data) => {
        this.pasta = data;
      });
    });
  }

  deletePasta(id:number) {
    this.foodservice.deletePasta(this.id).subscribe(
      (response:any) => {
        if (response.result === 'success') {
          alert("Success")
        } else {
          alert(response.message)
        }
      }
    )
    this.router.navigate(['/pasta']);
  }
}
