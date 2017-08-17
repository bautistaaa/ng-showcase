import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservablesService } from 'app/observables/observables.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-routing',
    templateUrl: './routing.component.html',
    styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit, OnDestroy {
    subscription: Subscription;

    constructor(private _observablesService: ObservablesService) { }

    ngOnInit() {
        this.subscription = this._observablesService.mySubject$.subscribe(data => {
            console.log(`routing component subscribed ${data}`);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
