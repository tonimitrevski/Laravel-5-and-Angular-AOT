import { platformBrowser } from '@angular/platform-browser';
import {MainModuleNgFactory} from "../../aot/resources/assets/angular/app/dynamic_components/modules/main.module.ngfactory";
import {enableProdMode} from "@angular/core";
enableProdMode();
platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
