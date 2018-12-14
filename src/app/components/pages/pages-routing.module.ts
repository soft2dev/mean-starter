// == Angular code modules
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// == App page components
import {MixerComponent} from "./mixer/mixer.component";
import {StatusComponent} from "./status/status.component";

const routes: Routes = [
  { path: 'mixer', component: MixerComponent },
  { path: 'status', component: StatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
