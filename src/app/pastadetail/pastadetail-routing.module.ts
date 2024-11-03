import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastadetailPage } from './pastadetail.page';

const routes: Routes = [
  {
    path: '',
    component: PastadetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastadetailPageRoutingModule {}
