import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Title } from '../models/title.model';
import { StoryLine } from '../models/storyline.model';

@Injectable()
export class TitlesService {
    public titles: Title[] = [];
    public title: Title;
    public storylines: StoryLine[] = [];

    constructor(private http: Http) {
    }

    getTitles() {
        this.http.get('/api/Title').subscribe(result => {
            this.titles = result.json();
        });
    }

    getTitle(titleId: number) {
        this.http.get('/api/Title/' + titleId).subscribe(result => {
            this.title = result.json();
        });

        this.http.get('/api/Title/StoryLines/' + titleId).subscribe(result => {
            this.storylines = result.json();
        });
    }

}