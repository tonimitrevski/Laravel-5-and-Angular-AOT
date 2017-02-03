import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
export var MyDirectiveDirective = (function () {
    function MyDirectiveDirective(templateRef, view) {
        this.templateRef = templateRef;
        this.view = view;
    }
    Object.defineProperty(MyDirectiveDirective.prototype, "appMyDIrective", {
        set: function (condition) {
            if (condition) {
                this.view.createEmbeddedView(this.templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    MyDirectiveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appMyDIrective]',
                },] },
    ];
    /** @nocollapse */
    MyDirectiveDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
    ]; };
    MyDirectiveDirective.propDecorators = {
        'appMyDIrective': [{ type: Input },],
    };
    return MyDirectiveDirective;
}());
//# sourceMappingURL=/home/toni/sites/angular-aot/resources/assets/angular/app/home/directives/my.directive.js.map