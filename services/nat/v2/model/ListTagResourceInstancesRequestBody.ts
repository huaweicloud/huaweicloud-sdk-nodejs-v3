import { Match } from './Match';
import { Tags } from './Tags';


export class ListTagResourceInstancesRequestBody {
    public offset?: string;
    public limit?: string;
    public action?: ListTagResourceInstancesRequestBodyActionEnum | string;
    public matches?: Array<Match>;
    private 'not_tags'?: Array<Tags>;
    public tags?: Array<Tags>;
    private 'tags_any'?: Array<Tags>;
    private 'not_tags_any'?: Array<Tags>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withOffset(offset: string): ListTagResourceInstancesRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListTagResourceInstancesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withAction(action: ListTagResourceInstancesRequestBodyActionEnum | string): ListTagResourceInstancesRequestBody {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<Match>): ListTagResourceInstancesRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withNotTags(notTags: Array<Tags>): ListTagResourceInstancesRequestBody {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<Tags>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<Tags> | undefined {
        return this['not_tags'];
    }
    public withTags(tags: Array<Tags>): ListTagResourceInstancesRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<Tags>): ListTagResourceInstancesRequestBody {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<Tags>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<Tags> | undefined {
        return this['tags_any'];
    }
    public withNotTagsAny(notTagsAny: Array<Tags>): ListTagResourceInstancesRequestBody {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<Tags>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<Tags> | undefined {
        return this['not_tags_any'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTagResourceInstancesRequestBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
