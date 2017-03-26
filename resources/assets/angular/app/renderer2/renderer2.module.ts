import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {Renderer2AppComponent} from "./components/main/renderer2.component";

@NgModule({
    bootstrap: [
        Renderer2AppComponent
    ],
    declarations: [
        Renderer2AppComponent
    ],
    imports: [BrowserModule],
    providers: []
})
export class Renderer2Module {}