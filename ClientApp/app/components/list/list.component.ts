import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../providers/titles.service';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    providers: [TitlesService]
})
export class ListComponent implements OnInit {
    private term: string = '';

    constructor(private titlesService: TitlesService) {
    }

    ngOnInit() {
        this.titlesService.getTitles();
    }

    titleClick(titleId: number) {
        this.titlesService.getTitle(titleId);
    }
}