import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Home rouging module
import {HomeRoutingModule} from './home-routing.module';

// Home components
import {HomeComponent} from './home.component';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';
import {IntroComponent} from './intro/intro.component';
import { FeaturesComponent } from './features/features.component';
import { SharedFooterComponent } from './shared-footer/shared-footer.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        WelcomeScreenComponent,
        IntroComponent,
        FeaturesComponent,
        SharedFooterComponent
    ]
})
export class HomeModule {
}
