import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';

import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';
import { AddMeetingDialogComponent } from './dialog/add-meeting-dialog/add-meeting-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMeetingDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
