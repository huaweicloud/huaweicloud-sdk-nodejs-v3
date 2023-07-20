import { MatchOption } from './MatchOption';
import { TagOption } from './TagOption';


export class ListInstancesByTagsRequestBody {
    public offset?: string;
    public limit?: string;
    public action?: ListInstancesByTagsRequestBodyActionEnum | string;
    public matches?: Array<MatchOption>;
    public tags?: Array<TagOption>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withOffset(offset: string): ListInstancesByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListInstancesByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withAction(action: ListInstancesByTagsRequestBodyActionEnum | string): ListInstancesByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<MatchOption>): ListInstancesByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<TagOption>): ListInstancesByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesByTagsRequestBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
