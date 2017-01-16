import {Component, OnInit, Input} from '@angular/core';
import {BlueDynamicComponent} from "../dynamic/blue.dinamic.component";
import {GreenDynamicComponent} from "../dynamic/green.dinamic.component";
import {RedDynamicComponent} from "../dynamic/red.dinamic.component";


@Component({
    selector: 'app',
    template: `
        <div class="container-fluid">
    <div class="page-header">
        <h1>Creating AOT Friendly Dynamic Components with Angular</h1>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">Application Code</div>
                <div class="panel-body">
                    <div class="input-group">
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-primary" (click)="grid.addDynamicCellComponent(selectedComponentType)">Add Dynamic Grid component</button>
    </span>
button
                        <select class="form-control" [(ngModel)]="selectedComponentType">
                            <option *ngFor="let cellComponentType of componentTypes" [ngValue]="cellComponentType">{{cellComponentType.name}}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">Library Code</div>
                <div class="panel-body">
                    <grid-component #grid></grid-component>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})
export class AppComponent implements OnInit {
    @Input() componentTypes: any[] = [BlueDynamicComponent, GreenDynamicComponent, RedDynamicComponent];
    @Input() selectedComponentType: any;

    ngOnInit(): void {
        // default to the first available option
        this.selectedComponentType = this.componentTypes ? this.componentTypes[0] : null;
    }
}