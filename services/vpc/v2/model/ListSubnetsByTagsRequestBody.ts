import { ListTag } from './ListTag';
import { Match } from './Match';


export class ListSubnetsByTagsRequestBody {
    public action: ListSubnetsByTagsRequestBodyActionEnum;
    public limit?: string;
    public offset?: string;
    public matches?: Array<Match>;
    public tags?: Array<ListTag>;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: ListSubnetsByTagsRequestBodyActionEnum): ListSubnetsByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withLimit(limit: string): ListSubnetsByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListSubnetsByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withMatches(matches: Array<Match>): ListSubnetsByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<ListTag>): ListSubnetsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSubnetsByTagsRequestBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
