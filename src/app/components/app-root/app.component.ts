import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public isWindowResize: boolean = false;
    public resizeTimer: number = null;

    constructor(
        @Inject(DOCUMENT) private document: any,
        public router: Router,
    ) {

    }

    ngOnInit() {
        this.router.events.subscribe(params => window.scrollTo(0, 0));
    }

    // Resize event for window object
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.isWindowResize = true;
        if (this.resizeTimer && this.isWindowResize) {
            clearTimeout(this.resizeTimer);
        }

        this.resizeTimer = setTimeout(
            (() => {
                this.isWindowResize = false;
            }).bind(this),
            25
        );
    }
}
