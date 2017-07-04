import { StoryLine } from './storyline.model';

export interface Title {
    TitleId: number;
    TitleName: string;
    TitleNameSortable: string;
    ReleaseYear: number;
    ProcessedDateTimeUTC: Date;
    storylines: StoryLine[];
}