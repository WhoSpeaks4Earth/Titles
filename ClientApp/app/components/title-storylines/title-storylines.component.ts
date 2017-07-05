import { Component, Input } from '@angular/core';
import { ITitle } from '../../models/title.model';

@Component({
    selector: 'title-storylines',
    templateUrl: './title-storylines.component.html',
    styleUrls: ['./title-storylines.component.css']
})
export class TitleStorylinesComponent {
    @Input() title: ITitle;
}