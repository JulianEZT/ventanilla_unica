import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'nav-bar',
    styleUrls: ['nav-bar.component.sass'],
    templateUrl: 'nav-bar.component.html'
})
export class NavBarComponent{
    @Input() responsive!: boolean
    open = false

    changeOpen(){
        console.log(this.open)
        this.open = !this.open
    }
}