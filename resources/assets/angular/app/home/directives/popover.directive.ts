/**
 * Created by toni on 23.12.16.
 */
import {
    Directive, TemplateRef, ViewContainerRef, Input, ComponentFactoryResolver, HostListener
} from '@angular/core';
import {PopoverComponent} from "../components/popover/popover.component";

@Directive({
    selector: '[popover]',
})

export class PopoverDirective {

    component: any;

    constructor(
        private vcRef: ViewContainerRef,
        private cfResolver: ComponentFactoryResolver
    ) {}

    @HostListener('mouseenter') onMouseEnter() {
        const cf = this.cfResolver.resolveComponentFactory(PopoverComponent);
        this.component = this.vcRef.createComponent(cf);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.component.destroy()
    }
}