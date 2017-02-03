import { Component } from '@angular/core';
import { GlobalService } from "../../services/global.service";
export var Component2 = (function () {
    function Component2(global) {
        this.global = global;
    }
    Component2.prototype.showPSecond = function () {
        this.global.click = true;
    };
    Component2.decorators = [
        { type: Component, args: [{
                    selector: 'component2',
                    templateUrl: 'component2.html'
                },] },
    ];
    /** @nocollapse */
    Component2.ctorParameters = function () { return [
        { type: GlobalService, },
    ]; };
    return Component2;
}());
//# sourceMappingURL=/home/toni/sites/angular-aot/resources/assets/angular/app/home/components/component2/2.component.js.map