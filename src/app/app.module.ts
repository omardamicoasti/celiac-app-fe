import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
