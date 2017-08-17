import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

    currency = 100300.125;
    currency2 = 100300.1;
    object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };

    constructor() { }

    ngOnInit() {
    }

}
