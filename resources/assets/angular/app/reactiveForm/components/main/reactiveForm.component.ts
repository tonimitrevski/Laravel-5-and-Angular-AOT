import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Contacts} from "./signup.interface";

@Component({
    selector: 'reactive-form',
    templateUrl: 'reactiveForm.template.html',
})
export class ReactiveFormAppComponent implements OnInit {
    contactinfo: FormGroup;
    constructor(private formbuilder: FormBuilder) {}



    ngOnInit() {
        this.contactinfo = this.formbuilder.group({
            name: ['', Validators.required],
            contactno: ['', Validators.required]
        });
    }

    onSubmit({value, valid}: {value: Contacts, valid: boolean}) {
        console.log(value, valid);
    }
}
