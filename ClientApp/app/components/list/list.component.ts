import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    public titles: Title[] = [];
    public title: Title;
    public storylines: Object[] = [];
    public term: string = '';

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.getTitlesData();
    }

    getTitlesData() {
        this.http.get('/api/Title').subscribe(result => {
            this.titles = result.json();
        });
    }

    titleClick(titleId: number) {

        // was rushing at this point, there are better ways to grab related data...
        this.http.get('/api/Title/' + titleId).subscribe(result => {
            this.title = result.json();
        });

        this.http.get('/api/Title/StoryLines/' + titleId).subscribe(result => {
            this.storylines = result.json();
        });
    }
}

export interface Title {
    TitleId: number;
    TitleName: string;
    TitleNameSortable: string;
    ReleaseYear: number;
    ProcessedDateTimeUTC: Date;
}