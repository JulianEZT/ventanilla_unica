import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.sass'],
    selector: 'landing'
})
export class LandingComponent implements OnInit {
    title = 'ng-carousel-demo';

    images = [
        { title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500" },
        { title: 'Second Slide', short: 'Second Slide Short', src: "../../../assets/images/page1.png" },
        { title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500" }
    ];

    constructor(config: NgbCarouselConfig) {
        config.interval = 2000;
        config.keyboard = true;
        config.pauseOnHover = true;
    }

    ngOnInit() {
        if (window.screen.width < 1300) {
            const space = document.getElementById('space')
            if (space) {
                space.style.display = 'none'
            }
        }
    }

}