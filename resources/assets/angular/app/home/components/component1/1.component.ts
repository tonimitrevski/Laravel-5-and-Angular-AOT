import { Component } from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'component1',
  templateUrl: '1.template.html'
})
export class Component1 {
    constructor(public global: GlobalService) {}

    showP() {
        this.global.click = false;
    }



}
