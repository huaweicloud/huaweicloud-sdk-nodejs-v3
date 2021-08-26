import { ListTag } from './ListTag';
import { Match } from './Match';


export class ListVpcsByTagsRequestBody {
    public action: ListVpcsByTagsRequestBodyActionEnum;
    public limit?: number;
    public offset?: number;
    public matches?: Array<Match>;
    public tags?: Array<ListTag>;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: ListVpcsByTagsRequestBodyActionEnum): ListVpcsByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withLimit(limit: number): ListVpcsByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVpcsByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withMatches(matches: Array<Match>): ListVpcsByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<ListTag>): ListVpcsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVpcsByTagsRequestBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
