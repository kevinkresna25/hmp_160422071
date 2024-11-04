import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpastaPage } from './editpasta.page';

const routes: Routes = [
  {
    path: '',
    component: EditpastaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpastaPageRoutingModule {}
