import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../providers/title.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ITitle } from '../../models/title.model';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    providers: [TitleService]
})
export class ListComponent implements OnInit {
    private term: string = '';
    private titles: ITitle[];

    constructor(
        private titleService: TitleService) { }

    ngOnInit(): void {
        this.getTitles();
    }

    getTitles(): void {
        this.titleService.getTitles()
            .subscribe(
                titles => this.titles = titles,
                error => console.log(error)
            )
    }
}