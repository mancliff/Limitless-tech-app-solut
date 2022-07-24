import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechHomePage } from './tech-home.page';

const routes: Routes = [
  {
    path: '',
    component: TechHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechHomePageRoutingModule {}
