import { Injectable } from '@angular/core';
export var GlobalService = (function () {
    function GlobalService() {
        this._click = false;
    }
    Object.defineProperty(GlobalService.prototype, "click", {
        get: function () {
            return this._click;
        },
        set: function (click) {
            this._click = click;
        },
        enumerable: true,
        configurable: true
    });
    GlobalService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GlobalService.ctorParameters = function () { return []; };
    return GlobalService;
}());
//# sourceMappingURL=/home/toni/sites/angular-aot/resources/assets/angular/app/home/services/global.service.js.map