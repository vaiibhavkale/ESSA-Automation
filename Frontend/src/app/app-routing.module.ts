import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InactivatedSiteInfoComponent } from './Inactivated site Info/inactivatedSiteInfo.component';
import { RemoveAPCsiteComponent } from './remove-apcsite/remove-apcsite.component';
import { ReviewScriptComponent } from './review-script/review-script.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inactivated', component: InactivatedSiteInfoComponent },
  { path: 'remove', component: RemoveAPCsiteComponent },
  { path: 'review', component: ReviewScriptComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to default route
  { path: '**', redirectTo: '/dashboard' } // Redirect to default route for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
