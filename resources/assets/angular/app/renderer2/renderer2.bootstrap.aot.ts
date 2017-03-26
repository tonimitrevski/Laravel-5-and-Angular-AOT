import {platformBrowser} from "@angular/platform-browser";
import {Renderer2ModuleNgFactory} from "../../aot/resources/assets/angular/app/renderer2/renderer2.module.ngfactory";
import {enableProdMode} from "@angular/core";
enableProdMode();
platformBrowser().bootstrapModuleFactory(Renderer2ModuleNgFactory);
