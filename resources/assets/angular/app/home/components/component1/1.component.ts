import { Component } from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
    selector: 'component1',
    templateUrl: '1.template.html',
    styleUrls: ['./component1.css']
})
export class Component1 {

    userObservable: number | null | undefined = undefined;

    constructor(public global: GlobalService) {}

    condition: number = 1;

    showP() {
        this.global.click = false;
    }



}
