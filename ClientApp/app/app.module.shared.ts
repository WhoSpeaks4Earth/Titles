import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { FilterPipe } from './pipes/filter.pipe';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        ListComponent,
        FilterPipe
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'list', component: ListComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
