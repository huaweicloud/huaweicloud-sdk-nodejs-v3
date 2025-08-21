import { MergeRequestBasicDiscussionDto } from './MergeRequestBasicDiscussionDto';


export class LineDiscussionDto {
    public discussions?: Array<MergeRequestBasicDiscussionDto>;
    public line?: number;
    public type?: LineDiscussionDtoTypeEnum | string;
    public constructor() { 
    }
    public withDiscussions(discussions: Array<MergeRequestBasicDiscussionDto>): LineDiscussionDto {
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
    UNCHANGD_L = 'unchangd-l',
    UNCHANGED_R = 'unchanged-r'
}
