import {platformBrowser} from "@angular/platform-browser";
import {ReactiveFormModuleNgFactory} from "../../aot/resources/assets/angular/app/reactiveForm/reactiveForm.module.ngfactory";
import {enableProdMode} from "@angular/core";
enableProdMode();
platformBrowser().bootstrapModuleFactory(ReactiveFormModuleNgFactory);
