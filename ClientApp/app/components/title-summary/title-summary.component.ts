import { Component, Input } from '@angular/core';
import { ITitle } from '../../models/title.model';

@Component({
    selector: 'title-summary',
    templateUrl: './title-summary.component.html',
    styleUrls: ['./title-summary.component.css']
})
export class TitleSummaryComponent {
    @Input() title: ITitle;
}