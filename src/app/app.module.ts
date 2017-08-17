// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';

import 'rxjs/Rx';
// declarations
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './forms/forms.component';
import { AnimationsComponent } from './animations/animations.component';
import { DirectivesComponent } from './directives/directives.component';
import { HttpComponent } from './http/http.component';
import { RoutingComponent } from './routing/routing.component';
import { ChildComponent } from './routing/child/child.component';
import { AnotherChildComponent } from './routing/another-child/another-child.component';
import { HighlightDirective } from './directives/highlight.directive';

// providers
import { HttpService } from 'app/http/http.service';
import { ObservablesComponent } from './observables/observables.component';
import { ObservablesService } from 'app/observables/observables.service';
import { PipesComponent } from './pipes/pipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildDetailComponent } from './routing/child-detail/child-detail.component';
import { UnitTestsComponent } from './unit-tests/unit-tests.component';
import { AuthGuardService } from 'app/auth-guard.service';
import { AuthService } from 'app/auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FormsComponent,
        AnimationsComponent,
        DirectivesComponent,
        HttpComponent,
        RoutingComponent,
        ChildComponent,
        AnotherChildComponent,
        HighlightDirective,
        ObservablesComponent,
        PipesComponent,
        PageNotFoundComponent,
        ChildDetailComponent,
        UnitTestsComponent,
        LoginComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        DatepickerModule.forRoot(),
        TabsModule.forRoot(),
    ],
    providers: [
        HttpService,
        ObservablesService,
        AuthService,
        AuthGuardService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
