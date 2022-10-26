import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'nav-bar',
    styleUrls: ['nav-bar.component.sass'],
    templateUrl: 'nav-bar.component.html'
})
export class NavBarComponent {
    @Input() responsive!: boolean
    open = false
    language = 'ES'
    param = { value: 'world' }
    translate: TranslateService;

    constructor(translate: TranslateService) {
        this.translate = translate
    }

    changeOpen() {
        console.log(this.open)
        this.open = !this.open
    }

    changeLanguage(language: string) {
        this.translate.use(language=='ES'?'es':'en')
        this.language = language
    }
}