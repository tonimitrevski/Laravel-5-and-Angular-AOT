import { platformBrowser } from '@angular/platform-browser';
import {MainModuleNgFactory} from "../aot/angular/app/modules/main.module.ngfactory";

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
