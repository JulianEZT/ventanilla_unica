import { Component, Input } from "@angular/core";

@Component({
    selector: 'responsive-nav-bar',
    styleUrls: ['responsive-nav-bar.component.sass'],
    templateUrl: 'responsive-nav-bar.component.html'
})
export class ResponsiveNavBarComponent{
    @Input() open!: boolean
    @Input() changeOpen!: () => void
}