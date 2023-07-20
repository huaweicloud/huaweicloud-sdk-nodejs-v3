import { Match } from './Match';
import { TagWithMultiValue } from './TagWithMultiValue';


export class ListResourceReq {
    public tags?: Array<TagWithMultiValue>;
    private 'tags_any'?: Array<TagWithMultiValue>;
    private 'not_tags'?: Array<TagWithMultiValue>;
    private 'not_tags_any'?: Array<TagWithMultiValue>;
    public action?: ListResourceReqActionEnum | string;
    public limit?: number;
    public offset?: number;
    public matches?: Array<Match>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withTags(tags: Array<TagWithMultiValue>): ListResourceReq {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<TagWithMultiValue>): ListResourceReq {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<TagWithMultiValue>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<TagWithMultiValue> | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<TagWithMultiValue>): ListResourceReq {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<TagWithMultiValue>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<TagWithMultiValue> | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<TagWithMultiValue>): ListResourceReq {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<TagWithMultiValue>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<TagWithMultiValue> | undefined {
        return this['not_tags_any'];
    }
    public withAction(action: ListResourceReqActionEnum | string): ListResourceReq {
        this['action'] = action;
        return this;
    }
    public withLimit(limit: number): ListResourceReq {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListResourceReq {
        this['offset'] = offset;
        return this;
    }
    public withMatches(matches: Array<Match>): ListResourceReq {
        this['matches'] = matches;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourceReqActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
