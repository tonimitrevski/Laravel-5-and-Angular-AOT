import { Component } from '@angular/core';
import { GlobalService } from "../../services/global.service";
export var Component1 = (function () {
    function Component1(global) {
        this.global = global;
        this.condition = 1;
    }
    Component1.prototype.showP = function () {
        this.global.click = false;
    };
    Component1.decorators = [
        { type: Component, args: [{
                    selector: 'component1',
                    templateUrl: '1.template.html'
                },] },
    ];
    /** @nocollapse */
    Component1.ctorParameters = function () { return [
        { type: GlobalService, },
    ]; };
    return Component1;
}());
//# sourceMappingURL=/home/toni/sites/angular-aot/resources/assets/angular/app/home/components/component1/1.component.js.map