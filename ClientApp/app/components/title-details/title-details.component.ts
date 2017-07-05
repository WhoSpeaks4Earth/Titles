import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '../../models/title.model';
import 'rxjs/add/operator/switchMap';

import { TitlesService } from '../../providers/titles.service';

@Component({
    selector: 'title-details',
    templateUrl: './title-details.component.html',
    styleUrls: ['./title-details.component.css'],
    providers: [TitlesService]
})
export class TitleDetailsComponent implements OnInit {
    @Input() title: Title;

    constructor(private titlesService: TitlesService,
                private route: ActivatedRoute,
                private location: Location) {}

    ngOnInit(): void {
        this.getTitleDetails();
    }

    getTitleDetails() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.titlesService.getTitle(+params.get('id')))
            .subscribe(title => this.title = title);
    }
}