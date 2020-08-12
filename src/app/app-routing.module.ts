import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home-dashboard', pathMatch: 'full' },
  {
    path: 'home-dashboard',
    loadChildren: () => import('./home-dashboard/home-dashboard.module').then(m => m.HomeDashboardModule)
  },
  {
    path: 'add-meeting',
    loadChildren: () => import('./add-meeting/add-meeting.module').then(m => m.AddMeetingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
