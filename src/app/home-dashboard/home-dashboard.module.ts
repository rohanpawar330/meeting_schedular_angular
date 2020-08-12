import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,
    AppMaterialModule
  ]
})
export class HomeDashboardModule { }
