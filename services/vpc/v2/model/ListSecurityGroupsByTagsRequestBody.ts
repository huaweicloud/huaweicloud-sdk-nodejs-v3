import { ListTag } from './ListTag';
import { Match } from './Match';


export class ListSecurityGroupsByTagsRequestBody {
    public action?: ListSecurityGroupsByTagsRequestBodyActionEnum | string;
    public limit?: number;
    public offset?: number;
    public matches?: Array<Match>;
    public tags?: Array<ListTag>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: ListSecurityGroupsByTagsRequestBodyActionEnum | string): ListSecurityGroupsByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withLimit(limit: number): ListSecurityGroupsByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityGroupsByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withMatches(matches: Array<Match>): ListSecurityGroupsByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<ListTag>): ListSecurityGroupsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityGroupsByTagsRequestBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
