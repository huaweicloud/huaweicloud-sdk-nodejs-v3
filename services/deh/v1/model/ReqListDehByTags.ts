import { Match } from './Match';
import { Tag } from './Tag';


export class ReqListDehByTags {
    public tags?: Array<Tag>;
    private 'not_tags'?: Array<Tag>;
    public limit?: number;
    public offset?: number;
    public action?: ReqListDehByTagsActionEnum | string;
    private 'tags_any'?: Array<Tag>;
    private 'not_tags_any'?: Array<Tag>;
    public matches?: Array<Match>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withTags(tags: Array<Tag>): ReqListDehByTags {
        this['tags'] = tags;
        return this;
    }
    public withNotTags(notTags: Array<Tag>): ReqListDehByTags {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<Tag>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<Tag> | undefined {
        return this['not_tags'];
    }
    public withLimit(limit: number): ReqListDehByTags {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ReqListDehByTags {
        this['offset'] = offset;
        return this;
    }
    public withAction(action: ReqListDehByTagsActionEnum | string): ReqListDehByTags {
        this['action'] = action;
        return this;
    }
    public withTagsAny(tagsAny: Array<Tag>): ReqListDehByTags {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<Tag>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<Tag> | undefined {
        return this['tags_any'];
    }
    public withNotTagsAny(notTagsAny: Array<Tag>): ReqListDehByTags {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<Tag>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<Tag> | undefined {
        return this['not_tags_any'];
    }
    public withMatches(matches: Array<Match>): ReqListDehByTags {
        this['matches'] = matches;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReqListDehByTagsActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
