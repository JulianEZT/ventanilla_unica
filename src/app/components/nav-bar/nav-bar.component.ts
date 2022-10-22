import { Component } from "@angular/core";

@Component({
    selector: 'nav-bar',
    styleUrls: ['nav-bar.component.sass'],
    templateUrl: 'nav-bar.component.html'
})
export class NavBarComponent{
    click() {
        console.log('hola')
    }
}