import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechHomePageRoutingModule } from './tech-home-routing.module';

import { TechHomePage } from './tech-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechHomePageRoutingModule
  ],
  declarations: [TechHomePage]
})
export class TechHomePageModule {}
