import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(titles: any, term: any): any {

        // if search term is undefined, return all items
        if (term === undefined) return titles;

        // otherwise, filter based on the search term
        return titles.filter(title => {
            return title.titleName.toLowerCase().includes(term.toLowerCase());
        });
    }
}