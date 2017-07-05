import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Title } from '../models/title.model';
import 'rxjs/add/operator/map';

@Injectable()
export class TitlesService {
    public titles: Title[] = [];
    public title: Title;

    constructor(private http: Http) {
    }

    getTitles(): Observable<Title[]> {
        return this.http.get('/api/v1/Titles')
            .map((res: Response) => <Title[]> res.json());
    }

    getTitle(id: number): Observable<Title> {
        return this.http.get('/api/v1/Titles/' + id)
            .map((res: Response) => <Title> res.json());
    }
}