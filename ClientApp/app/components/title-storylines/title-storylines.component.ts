import { Component, Input } from '@angular/core';
import { ngContentDef } from '@angular/core/src/view/ng_content';
import { IStoryLine } from '../../models/storyline.model';

@Component({
    selector: 'title-storylines',
    templateUrl: './title-storylines.component.html',
    styleUrls: ['./title-storylines.component.css']
})
export class TitleStorylinesComponent {
    @Input() storylines: IStoryLine[];
}