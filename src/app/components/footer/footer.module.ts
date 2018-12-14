import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Footer component
import {FooterComponent} from './footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})
export class FooterModule {
}
