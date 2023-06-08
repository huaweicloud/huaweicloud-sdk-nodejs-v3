import { Match } from './Match';
import { TagValues } from './TagValues';


export class ListTagReq {
    public tags?: Array<TagValues>;
    private 'tags_any'?: Array<TagValues> | undefined;
    private 'not_tags'?: Array<TagValues> | undefined;
    private 'not_tags_any'?: Array<TagValues> | undefined;
    public limit?: number;
    public offset?: number;
    public action: string;
    public matches?: Array<Match>;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withTags(tags: Array<TagValues>): ListTagReq {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<TagValues>): ListTagReq {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<TagValues> | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny() {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<TagValues>): ListTagReq {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<TagValues> | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags() {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<TagValues>): ListTagReq {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<TagValues> | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny() {
        return this['not_tags_any'];
    }
    public withLimit(limit: number): ListTagReq {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTagReq {
        this['offset'] = offset;
        return this;
    }
    public withAction(action: string): ListTagReq {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<Match>): ListTagReq {
        this['matches'] = matches;
        return this;
    }
}