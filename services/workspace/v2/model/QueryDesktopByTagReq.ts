import { Match } from './Match';
import { Tags } from './Tags';


export class QueryDesktopByTagReq {
    public offset?: string;
    public limit?: string;
    public action?: string;
    private 'without_any_tag'?: boolean;
    public matches?: Array<Match>;
    public tags?: Array<Tags>;
    private 'tags_any'?: Array<Tags>;
    private 'not_tags'?: Array<Tags>;
    private 'not_tags_any'?: Array<Tags>;
    public constructor() { 
    }
    public withOffset(offset: string): QueryDesktopByTagReq {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): QueryDesktopByTagReq {
        this['limit'] = limit;
        return this;
    }
    public withAction(action: string): QueryDesktopByTagReq {
        this['action'] = action;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): QueryDesktopByTagReq {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withMatches(matches: Array<Match>): QueryDesktopByTagReq {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<Tags>): QueryDesktopByTagReq {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<Tags>): QueryDesktopByTagReq {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<Tags>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<Tags> | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<Tags>): QueryDesktopByTagReq {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<Tags>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<Tags> | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<Tags>): QueryDesktopByTagReq {
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