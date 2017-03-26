import {Component, ElementRef, OnInit, Renderer2} from "@angular/core";

@Component({
    selector: 'renderer2',
    templateUrl: 'renderer2.template.html',
})
export class Renderer2AppComponent implements OnInit{
    constructor(
        private _elRef: ElementRef,
        private _renderer: Renderer2
    ) {}

    ngOnInit() {
        // Create comment
        let comment = this._renderer.createComment('Comment');
        // Create text
        let text = this._renderer.createText('Text');
        // create span
        let span = this._renderer.createElement('span');
        // target class
        let select = this._renderer.selectRootElement('#target');

        //append comment into target id
        this._renderer.appendChild(select, comment);
        // append span into target id
        this._renderer.appendChild(select, span);
        // append text into span
        this._renderer.appendChild(span, text);

        // listen click
        this._renderer.listen(span, 'click', (event) => {
            console.log(event)
        })
    };
}
