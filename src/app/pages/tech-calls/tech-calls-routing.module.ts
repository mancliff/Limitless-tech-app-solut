import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechCallsPage } from './tech-calls.page';

const routes: Routes = [
  {
    path: '',
    component: TechCallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechCallsPageRoutingModule {}
