import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
})
export class PastadetailPage implements OnInit {
  id = 0;
  index = 0;
  pasta: any = {};
  step = 1;
  instruction = '';

  constructor(
    private route: ActivatedRoute,
    private foodservice: FoodserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.foodservice.pastaDetail(params['index']).subscribe((data) => {
        this.pasta = data;
        this.setNextStepNumber();
      });
    });
  }

  deletePasta(id: number) {
    this.foodservice.deletePasta(id).subscribe((response: any) => {
      if (response.result === 'success') {
        alert('Success');
      } else {
        alert(response.message);
      }
    });
    this.router.navigate(['/pasta']);
  }

  setNextStepNumber() {
    if (this.pasta.instructions && this.pasta.instructions.length > 0) {
      const lastStep = parseInt(
        this.pasta.instructions[this.pasta.instructions.length - 1].step,
        10
      );
      this.step = lastStep + 1;
    } else {
      this.step = 1;
    }
  }

  addInstruction(id: number) {
    this.foodservice
      .addInstruction(id, this.step, this.instruction)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('Success');
          this.refreshInstructions(id);
        } else {
          alert(response.message);
        }
      });
  }

  refreshInstructions(id: number) {
    this.foodservice.pastaDetail(id).subscribe((data) => {
      this.pasta.instructions = data.instructions;
      this.setNextStepNumber();
    });
  }
}
