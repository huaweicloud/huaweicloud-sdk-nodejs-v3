import { Match } from './Match';
import { TagValuesList } from './TagValuesList';


export class QueryResourceInstanceTagsBody {
    public tags?: Array<TagValuesList>;
    private 'tags_any'?: Array<TagValuesList>;
    private 'not_tags'?: Array<TagValuesList>;
    private 'not_tags_any'?: Array<TagValuesList>;
    private 'sys_tags'?: Array<TagValuesList>;
    public limit?: string;
    public offset?: string;
    public action?: QueryResourceInstanceTagsBodyActionEnum | string;
    public matches?: Array<Match>;
    private 'without_any_tag'?: boolean;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withTags(tags: Array<TagValuesList>): QueryResourceInstanceTagsBody {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<TagValuesList>): QueryResourceInstanceTagsBody {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<TagValuesList>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<TagValuesList> | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<TagValuesList>): QueryResourceInstanceTagsBody {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<TagValuesList>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<TagValuesList> | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<TagValuesList>): QueryResourceInstanceTagsBody {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<TagValuesList>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<TagValuesList> | undefined {
        return this['not_tags_any'];
    }
    public withSysTags(sysTags: Array<TagValuesList>): QueryResourceInstanceTagsBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TagValuesList>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<TagValuesList> | undefined {
        return this['sys_tags'];
    }
    public withLimit(limit: string): QueryResourceInstanceTagsBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): QueryResourceInstanceTagsBody {
        this['offset'] = offset;
        return this;
    }
    public withAction(action: QueryResourceInstanceTagsBodyActionEnum | string): QueryResourceInstanceTagsBody {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<Match>): QueryResourceInstanceTagsBody {
        this['matches'] = matches;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): QueryResourceInstanceTagsBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryResourceInstanceTagsBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
