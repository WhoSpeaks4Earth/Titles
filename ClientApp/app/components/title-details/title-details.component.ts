import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ITitle } from '../../models/title.model';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';
import { TitlesService } from '../../providers/titles.service';

@Component({
    selector: 'title-details',
    templateUrl: './title-details.component.html',
    styleUrls: ['./title-details.component.css'],
    providers: [TitlesService]
})
export class TitleDetailsComponent implements OnInit {
    title: ITitle;

    constructor(private titlesService: TitlesService,
                private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.getTitleDetails();
    }

    getTitleDetails() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.titlesService.getTitle(+params.get('id')))
            .subscribe({
                next: title => this.title = title,
                error: err => console.log(err)
            });
    }
}