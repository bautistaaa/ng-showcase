import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';
import { ObservablesService } from 'app/observables/observables.service';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-observables',
    templateUrl: './observables.component.html',
    styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
    myNumbersSubscription: Subscription;
    myObservableSubscription: Subscription;
    mySubjectSubscription: Subscription;

    constructor(private _observablesService: ObservablesService) { }

    ngOnInit() {
        // subscribe to interval
        const myNumbers = Observable.interval(1000)
            .map(
                (data: number) => {
                    return data * 2;
                }
            );

        this.myNumbersSubscription = myNumbers.subscribe(
            (number: number) => { console.log(number); }
        );

        // create own observable
        const myObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(
                () => {
                    observer.next('hi');
                }, 2000);
            setTimeout(
                () => {
                    observer.next('uh hi again');
                }, 4000);
            setTimeout(
                () => {
                    // observer.error('this fails');
                    observer.complete();
                }, 5000);
        });

        this.myObservableSubscription = myObservable.subscribe(
            (data: string) => { console.log(data); },
            (error: string) => { console.log(error); },
            () => { console.log('complete'); }
        );

        this.mySubjectSubscription = this._observablesService.mySubject$.subscribe(data => {
            console.log(`subject data is ${data}`);
        });
    }

    ngOnDestroy() {
        this.myNumbersSubscription.unsubscribe();
        this.myObservableSubscription.unsubscribe();
        this.mySubjectSubscription.unsubscribe();
    }

    onClick() {
        let random = Math.random();
        this._observablesService.mySubject$.next(random);
    }

}
