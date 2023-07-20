import { MatchReq } from './MatchReq';
import { TagReq } from './TagReq';


export class ListPublicipsByTagsRequestBody {
    public tags?: Array<TagReq>;
    public limit?: number;
    public offset?: number;
    public action?: ListPublicipsByTagsRequestBodyActionEnum | string;
    public matches?: Array<MatchReq>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withTags(tags: Array<TagReq>): ListPublicipsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withLimit(limit: number): ListPublicipsByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPublicipsByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withAction(action: ListPublicipsByTagsRequestBodyActionEnum | string): ListPublicipsByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<MatchReq>): ListPublicipsByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsByTagsRequestBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
