import { Component, Input } from '@angular/core';

@Component({
    selector: 'title-genres',
    templateUrl: './title-genres.component.html',
    styleUrls: ['./title-genres.component.css']
})
export class TitleGenresComponent {
    @Input() genres;
}