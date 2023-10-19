import { AggTag } from './AggTag';
import { Tag } from './Tag';


export class ListResourceByFilterTagRequestBody {
    public action?: ListResourceByFilterTagRequestBodyActionEnum | string;
    public limit?: number;
    public offset?: number;
    public tags?: Array<AggTag>;
    public matches?: Array<Tag>;
    public constructor() { 
    }
    public withAction(action: ListResourceByFilterTagRequestBodyActionEnum | string): ListResourceByFilterTagRequestBody {
        this['action'] = action;
        return this;
    }
    public withLimit(limit: number): ListResourceByFilterTagRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListResourceByFilterTagRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withTags(tags: Array<AggTag>): ListResourceByFilterTagRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<Tag>): ListResourceByFilterTagRequestBody {
        this['matches'] = matches;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourceByFilterTagRequestBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
