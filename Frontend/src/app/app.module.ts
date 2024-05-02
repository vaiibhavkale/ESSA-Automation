import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InactivatedSiteInfoComponent } from './Inactivated site Info/inactivatedSiteInfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RemoveAPCsiteComponent } from './remove-apcsite/remove-apcsite.component';
import { ReviewScriptComponent } from './review-script/review-script.component';

@NgModule({
  declarations: [
    AppComponent,
    InactivatedSiteInfoComponent,
    DashboardComponent,
    RemoveAPCsiteComponent,
    ReviewScriptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
