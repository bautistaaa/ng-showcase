import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from 'app/forms/forms.component';
import { DirectivesComponent } from 'app/directives/directives.component';
import { AnimationsComponent } from 'app/animations/animations.component';
import { HttpComponent } from 'app/http/http.component';
import { RoutingComponent } from 'app/routing/routing.component';
import { ChildComponent } from 'app/routing/child/child.component';
import { AnotherChildComponent } from 'app/routing/another-child/another-child.component';
import { ObservablesComponent } from 'app/observables/observables.component';
import { PipesComponent } from 'app/pipes/pipes.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { ChildDetailComponent } from 'app/routing/child-detail/child-detail.component';
import { UnitTestsComponent } from "app/unit-tests/unit-tests.component";
import { AuthGuardService } from "app/auth-guard.service";
import { LoginComponent } from "app/login/login.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/routing'
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'routing',
        component: RoutingComponent,
        canActivate: [AuthGuardService],
        // canActivateChild: [AuthGuardService],
        children: [
            { path: '', component: ChildComponent },
            { path: 'anotherChild', component: AnotherChildComponent }, // gotcha, watch the ordering here
            { path: ':id', component: ChildDetailComponent }
        ]
    },
    {
        path: 'directives',
        component: DirectivesComponent,
    },
    {
        path: 'animations',
        component: AnimationsComponent
    },
    {
        path: 'http',
        component: HttpComponent
    },
    {
        path: 'observables',
        component: ObservablesComponent
    },
    {
        path: 'pipes',
        component: PipesComponent
    },
    {
        path: 'test',
        component: UnitTestsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
