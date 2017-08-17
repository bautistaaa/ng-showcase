import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
    minDate: Date = void 0;
    form: FormGroup;

    constructor(private _formBuider: FormBuilder) { }

    ngOnInit() {
        (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
        this.createForm();
    }

    createForm() {
        this.form = this._formBuider.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            program: '',
            division: '',
            startDate: ''
        });
    }

    onSubmit({ value, valid }: { value: any, valid: boolean }) {
        // make http post
        console.log(value, valid);
    }

    resetForm() {
        this.form.reset();
    }

}
