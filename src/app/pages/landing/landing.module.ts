import { NgModule } from '@angular/core';
//import { MatIconModule } from '@angular/material/icon';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    //MatIconModule
  ],
  exports: [LandingComponent],
  providers: [],
  bootstrap: []
})
export class LandingModule { }
