import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechCallsPageRoutingModule } from './tech-calls-routing.module';

import { TechCallsPage } from './tech-calls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechCallsPageRoutingModule
  ],
  declarations: [TechCallsPage]
})
export class TechCallsPageModule {}
