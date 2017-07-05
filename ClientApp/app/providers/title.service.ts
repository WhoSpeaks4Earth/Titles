import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ITitle } from '../models/title.model';
import 'rxjs/add/operator/map';

@Injectable()
export class TitleService {

    constructor(private http: Http) {
    }

    getTitles(): Observable<ITitle[]> {
        return this.http.get('/api/v1/Titles')
            .map((res: Response) => <ITitle[]> res.json());
    }

    getTitle(id: number): Observable<ITitle> {
        return this.http.get('/api/v1/Titles/' + id)
            .map((res: Response) => <ITitle> res.json());
    }
}