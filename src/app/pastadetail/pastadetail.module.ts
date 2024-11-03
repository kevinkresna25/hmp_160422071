import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastadetailPageRoutingModule } from './pastadetail-routing.module';

import { PastadetailPage } from './pastadetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastadetailPageRoutingModule
  ],
  declarations: [PastadetailPage]
})
export class PastadetailPageModule {}
