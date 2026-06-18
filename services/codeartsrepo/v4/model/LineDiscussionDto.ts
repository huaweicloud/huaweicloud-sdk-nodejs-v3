import { MergeRequestDiscussionDto } from './MergeRequestDiscussionDto';


export class LineDiscussionDto {
    public discussions?: Array<MergeRequestDiscussionDto>;
    public line?: number;
    public type?: LineDiscussionDtoTypeEnum | string;
    public constructor() { 
    }
    public withDiscussions(discussions: Array<MergeRequestDiscussionDto>): LineDiscussionDto {
        this['discussions'] = discussions;
        return this;
    }
    public withLine(line: number): LineDiscussionDto {
        this['line'] = line;
        return this;
    }
    public withType(type: LineDiscussionDtoTypeEnum | string): LineDiscussionDto {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LineDiscussionDtoTypeEnum {
    OLD = 'old',
    NEW = 'new',
    UNCHANGED_L = 'unchanged-l',
    UNCHANGED_R = 'unchanged-r'
}
