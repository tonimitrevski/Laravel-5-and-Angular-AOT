import { Component } from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
    selector: 'component1',
    templateUrl: '1.template.html',
    styleUrls: ['1component.scss']
})
export class Component1 {
    constructor(public global: GlobalService) {}

    condition: number = 1;

    showP() {
        this.global.click = false;
    }



}
