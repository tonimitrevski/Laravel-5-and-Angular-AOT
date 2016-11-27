import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from '../components/component1/hello-world.component';
import {Component2} from "../components/component2/hello-world.component";

@NgModule({
  bootstrap: [HelloWorldComponent, Component2],
  declarations: [HelloWorldComponent, Component2],
  imports: [BrowserModule],
  providers: []
})
export class MainModule {}
