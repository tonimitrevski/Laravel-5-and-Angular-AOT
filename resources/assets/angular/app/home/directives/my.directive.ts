/**
 * Created by toni on 23.12.16.
 */
import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
    selector: '[appMyDIrective]',
})

export class MyDirectiveDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private view: ViewContainerRef
    ) {}

    @Input() set appMyDIrective(condition) {
        if(condition) {
            this.view.createEmbeddedView(this.templateRef);
        }
    }
}