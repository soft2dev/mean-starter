import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from "@angular/router";

// NgbModule (Bootstrap)
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

// Header component
import {HeaderComponent} from './header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {
}
