import { IStoryLine } from './storyline.model';

export interface ITitle {
    TitleId: number;
    TitleName: string;
    TitleNameSortable: string;
    ReleaseYear: number;
    ProcessedDateTimeUTC: Date;
    storylines: IStoryLine[];
}