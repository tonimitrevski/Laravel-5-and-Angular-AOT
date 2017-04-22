import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormAppComponent} from "./components/main/reactiveForm.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
    bootstrap: [
        ReactiveFormAppComponent
    ],
    declarations: [
        ReactiveFormAppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: []
})
export class ReactiveFormModule {}