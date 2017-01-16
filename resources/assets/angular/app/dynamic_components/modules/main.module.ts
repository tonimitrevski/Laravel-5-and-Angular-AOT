import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from '../components/app/app.component';
import {FormsModule} from "@angular/forms";
import {GridModule} from "../components/grid/grid.module";
import {BlueDynamicComponent} from "../components/dynamic/blue.dinamic.component";
import {GreenDynamicComponent} from "../components/dynamic/green.dinamic.component";
import {RedDynamicComponent} from "../components/dynamic/red.dinamic.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        GridModule.withComponents([
            BlueDynamicComponent,
            GreenDynamicComponent,
            RedDynamicComponent
        ])
    ],
    declarations: [
        AppComponent,
        BlueDynamicComponent,
        GreenDynamicComponent,
        RedDynamicComponent
    ],
    bootstrap: [AppComponent]
})
export class MainModule {
}