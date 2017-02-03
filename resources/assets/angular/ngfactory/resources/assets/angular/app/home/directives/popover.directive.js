import { Directive, ViewContainerRef, ComponentFactoryResolver, HostListener } from '@angular/core';
import { PopoverComponent } from "../components/popover/popover.component";
export var PopoverDirective = (function () {
    function PopoverDirective(vcRef, cfResolver) {
        this.vcRef = vcRef;
        this.cfResolver = cfResolver;
    }
    PopoverDirective.prototype.onMouseEnter = function () {
        var cf = this.cfResolver.resolveComponentFactory(PopoverComponent);
        this.component = this.vcRef.createComponent(cf);
    };
    PopoverDirective.prototype.onMouseLeave = function () {
        this.component.destroy();
    };
    PopoverDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[popover]',
                },] },
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, },
        { type: ComponentFactoryResolver, },
    ]; };
    PopoverDirective.propDecorators = {
        'onMouseEnter': [{ type: HostListener, args: ['mouseenter',] },],
        'onMouseLeave': [{ type: HostListener, args: ['mouseleave',] },],
    };
    return PopoverDirective;
}());
//# sourceMappingURL=/home/toni/sites/angular-aot/resources/assets/angular/app/home/directives/popover.directive.js.map