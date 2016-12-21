import { platformBrowser } from '@angular/platform-browser';
import {MainModuleNgFactory} from "../aot/resources/assets/angular/app/modules/main.module.ngfactory";

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
