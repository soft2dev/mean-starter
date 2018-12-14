import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// NgbModule (Bootstrap)
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// App component
import {AppComponent} from "./components/app-root";

// App Modules
import {AppRoutingModule} from 'app/app-routing.module';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';
import {HomeModule} from './components/home/home.module';
import {PagesModule} from './components/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FooterModule,
    HeaderModule,
    HttpClientModule,
    NgbModule.forRoot(),
    HomeModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
