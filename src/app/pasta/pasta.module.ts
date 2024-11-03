import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastaPageRoutingModule } from './pasta-routing.module';

import { PastaPage } from './pasta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastaPageRoutingModule
  ],
  declarations: [PastaPage]
})
export class PastaPageModule {}
