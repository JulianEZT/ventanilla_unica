import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PQRComponent } from './pages/pqr/pqr.component';
import { PQRModule } from './pages/pqr/pqr.module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'pqr',
    component: PQRComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PQRModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
