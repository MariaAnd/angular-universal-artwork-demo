import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { ArtworkPageComponent } from './pages/artwork-page/artwork-page.component';
const routes: Routes = [
  { path: '', component: OverviewPageComponent },
  { path: ':id', component: ArtworkPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
