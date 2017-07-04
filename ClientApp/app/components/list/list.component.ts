import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TitlesService } from '../../providers/titles.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Title } from '../../models/title.model';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    providers: [TitlesService]
})
export class ListComponent implements OnInit {
    private term: string = '';
    public titles: Observable<Title[]>;
    private title: Title;

    constructor(private titlesService: TitlesService) {
    }

    ngOnInit(): void {
        this.titlesService.getTitles();
    }

    titleClick(titleId: number) {
        this.titlesService.getTitle(titleId);
    }
}