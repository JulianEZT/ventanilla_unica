import { Component } from "@angular/core";

@Component({
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.sass'],
    selector: 'landing'
})
export class LandingComponent {

    constructor() {
        window.onscroll = this.onScroll;
    }

    onScroll() {
        const banner = document.getElementById('banner');
        if (banner) {
            const gov = document.getElementById('gov-co');
            const menu = document.getElementById('menu');
            if (document.documentElement.scrollTop > banner.offsetHeight) {
                if (gov && banner && menu) {
                    banner.style.height = '0px';
                }
            } else {
                if (gov && banner && menu) {
                    banner.style.height = '10vh';
                }
            }
        }
    }
}