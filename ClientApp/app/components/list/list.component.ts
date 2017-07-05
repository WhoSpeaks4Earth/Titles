import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private titles: Title[];
    private selectedTitle: Title;

    constructor(
        private titlesService: TitlesService,
        private router: Router) { }

    ngOnInit(): void {
        this.getTitles();
    }

    getTitles() {
        this.titlesService.getTitles()
            .subscribe(
                titles => this.titles = titles,
                error => console.log(error)
            )
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedTitle.TitleId]);
    }

}