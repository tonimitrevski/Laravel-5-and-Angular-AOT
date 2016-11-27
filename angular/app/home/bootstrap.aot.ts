import { platformBrowser } from '@angular/platform-browser';
import {MainModuleNgFactory} from "../../aot/angular/app/home/modules/main.module.ngfactory";

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
