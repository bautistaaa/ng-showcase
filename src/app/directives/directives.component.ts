import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

    list = [1, 2, 3, 4, 5];
    show = false;

    constructor() { }

    ngOnInit() {
    }

}
