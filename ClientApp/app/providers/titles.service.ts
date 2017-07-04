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
        this.http.get('/api/v1/Titles').subscribe(result => {
            this.titles = result.json();
        });
    }

    getTitle(titleId: number) {
        this.http.get('/api/v1/Titles/' + titleId).subscribe(result => {
            this.title = result.json();
        });

        this.http.get('/api/v1/Titles/' + titleId + '/StoryLines/').subscribe(result => {
            this.storylines = result.json();
        });
    }

}