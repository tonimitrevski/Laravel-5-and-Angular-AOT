import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ANALYZE_FOR_ENTRY_COMPONENTS} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Grid} from "./grod.component";
import {Cell} from "./grid-cell.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        Grid,
        Cell
    ],
    exports: [
        Grid
    ]
})
export class GridModule {
    static withComponents(components: any[]) {
        return {
            ngModule: GridModule,
            providers: [
                {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true}
            ]
        }
    }
}