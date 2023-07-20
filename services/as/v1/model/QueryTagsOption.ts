import { Matches } from './Matches';
import { TagsMultiValue } from './TagsMultiValue';


export class QueryTagsOption {
    public tags?: Array<TagsMultiValue>;
    private 'tags_any'?: Array<TagsMultiValue>;
    private 'not_tags'?: Array<TagsMultiValue>;
    private 'not_tags_any'?: Array<TagsMultiValue>;
    public limit?: string;
    public marker?: string;
    public action?: QueryTagsOptionActionEnum | string;
    public offset?: string;
    public matches?: Array<Matches>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withTags(tags: Array<TagsMultiValue>): QueryTagsOption {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<TagsMultiValue>): QueryTagsOption {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<TagsMultiValue>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<TagsMultiValue> | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<TagsMultiValue>): QueryTagsOption {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<TagsMultiValue>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<TagsMultiValue> | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<TagsMultiValue>): QueryTagsOption {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<TagsMultiValue>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<TagsMultiValue> | undefined {
        return this['not_tags_any'];
    }
    public withLimit(limit: string): QueryTagsOption {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): QueryTagsOption {
        this['marker'] = marker;
        return this;
    }
    public withAction(action: QueryTagsOptionActionEnum | string): QueryTagsOption {
        this['action'] = action;
        return this;
    }
    public withOffset(offset: string): QueryTagsOption {
        this['offset'] = offset;
        return this;
    }
    public withMatches(matches: Array<Matches>): QueryTagsOption {
        this['matches'] = matches;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryTagsOptionActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
