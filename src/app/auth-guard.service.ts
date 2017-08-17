import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(
        private _authService: AuthService,
        private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this._authService.isAuthenticated()
            .then(
                authenticated => {
                    if (authenticated) {
                        console.log('yay')
                        return true;
                    } else {
                        console.log('nooo')
                        this._router.navigate(['/login']);
                    }
                }
            );
    }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }

}
