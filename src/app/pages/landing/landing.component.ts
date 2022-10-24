import { Component, Input, OnInit } from "@angular/core";

@Component({
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.sass'],
    selector: 'landing'
})
export class LandingComponent implements OnInit {

    ngOnInit(){
        if(window.screen.width < 1300){
            const space = document.getElementById('space')
            if(space){
                space.style.display = 'none'
            }
        }
    }
}