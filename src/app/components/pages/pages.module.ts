// == Angular code modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// == Angular third party modules
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatSliderModule} from "@angular/material";

// == App modules
import {PagesRoutingModule} from './pages-routing.module';

// == App page components
import {MixerComponent} from './mixer/mixer.component';
import {StatusComponent} from './status/status.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    NgbModule,
    PagesRoutingModule
  ],
  declarations: [MixerComponent, StatusComponent]
})
export class PagesModule {
}
