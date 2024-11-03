import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
})
export class PastadetailPage implements OnInit {
  index = 0;
  pasta: any = {};

  constructor(private route: ActivatedRoute, private foodservice: FoodserviceService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.foodservice.pastaDetail(params['index']).subscribe((data) => {
        this.pasta = data;
      });
    });
  }
}
