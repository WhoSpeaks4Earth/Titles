import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { TitleSummaryComponent } from './components/title-summary/title-summary.component';
import { TitleDetailsComponent } from './components/title-details/title-details.component';
import { TitleStorylinesComponent } from './components/title-storylines/title-storylines.component';
import { TitleGenresComponent } from './components/title-genres/title-genres.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FilterPipe } from './pipes/filter.pipe';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        ListComponent,
        TitleDetailsComponent,
        TitleSummaryComponent,
        TitleStorylinesComponent,
        LoaderComponent,
        TitleGenresComponent,
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
