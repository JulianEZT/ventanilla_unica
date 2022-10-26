import { Component } from "@angular/core";
import { AccesibilityService } from "./accesibility.service";

@Component({
    selector: 'accesibility',
    styleUrls: ['accesibility.component.sass'],
    templateUrl: 'accesibility.component.html'
})
export class AccesibilityComponent{
    constructor(private acessibilityService: AccesibilityService){
    }
}