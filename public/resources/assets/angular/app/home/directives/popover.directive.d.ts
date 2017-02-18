/**
 * Created by toni on 23.12.16.
 */
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
export declare class PopoverDirective {
    private vcRef;
    private cfResolver;
    component: any;
    constructor(vcRef: ViewContainerRef, cfResolver: ComponentFactoryResolver);
    onMouseEnter(): void;
    onMouseLeave(): void;
}
