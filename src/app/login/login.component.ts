import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginStatus;

    constructor(
        private _authService: AuthService
    ) { }

    ngOnInit() {
        this.loginStatus = this._authService.loggedIn;
    }

    onLoginClick() {
        this._authService.login();
        this.loginStatus = this._authService.loggedIn;
    }
}
