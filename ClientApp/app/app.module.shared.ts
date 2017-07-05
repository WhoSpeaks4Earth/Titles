import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { TitleDetailsComponent } from './components/title-details/title-details.component';
import { FilterPipe } from './pipes/filter.pipe';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        ListComponent,
        TitleDetailsComponent,
        FilterPipe
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'list', component: ListComponent },
            { path: 'title-details/:id', component: TitleDetailsComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        FormsModule
    ]
};
