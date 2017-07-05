import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ITitle } from '../../models/title.model';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';
import { TitleService } from '../../providers/title.service';

@Component({
    selector: 'title-details',
    templateUrl: './title-details.component.html',
    styleUrls: ['./title-details.component.css'],
    providers: [TitleService]
})
export class TitleDetailsComponent implements OnInit {
    title: ITitle;

    constructor(private titleService: TitleService,
                private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.getTitleDetails();
    }

    getTitleDetails() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.titleService.getTitle(+params.get('id')))
            .subscribe({
                next: title => this.title = title,
                error: err => console.log(err)
            });
    }
}