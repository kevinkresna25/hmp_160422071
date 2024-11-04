import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpastaPageRoutingModule } from './editpasta-routing.module';

import { EditpastaPage } from './editpasta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpastaPageRoutingModule
  ],
  declarations: [EditpastaPage]
})
export class EditpastaPageModule {}
