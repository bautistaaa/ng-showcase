import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-child-detail',
    templateUrl: './child-detail.component.html',
    styleUrls: ['./child-detail.component.css']
})
export class ChildDetailComponent implements OnInit {
    id: number;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params   // snapshot.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                }
            );
    }

    onButtonClick() {
        this.id += 1;
        this._router.navigate(['routing', this.id]);
    }

}
