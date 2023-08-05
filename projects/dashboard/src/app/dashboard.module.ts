import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class DashboardModule { }
