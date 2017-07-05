import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
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
    private selectedTitle: ITitle;

    constructor(
        private titleService: TitleService,
        private router: Router) { }

    ngOnInit(): void {
        this.getTitles();
    }

    getTitles() {
        this.titleService.getTitles()
            .subscribe(
                titles => this.titles = titles,
                error => console.log(error)
            )
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedTitle.TitleId]);
    }
}