import { TagFilter } from './TagFilter';


export class ShowResourceInstances {
    public action?: ShowResourceInstancesActionEnum | string;
    public tags?: TagFilter;
    private 'tags_any'?: TagFilter;
    private 'not_tags'?: TagFilter;
    private 'not_tags_any'?: TagFilter;
    private 'sys_tags'?: TagFilter;
    private 'without_any_tag'?: boolean;
    public limit?: string;
    public offset?: string;
    public matches?: Array<object>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: ShowResourceInstancesActionEnum | string): ShowResourceInstances {
        this['action'] = action;
        return this;
    }
    public withTags(tags: TagFilter): ShowResourceInstances {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: TagFilter): ShowResourceInstances {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: TagFilter  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): TagFilter | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: TagFilter): ShowResourceInstances {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: TagFilter  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): TagFilter | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: TagFilter): ShowResourceInstances {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: TagFilter  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): TagFilter | undefined {
        return this['not_tags_any'];
    }
    public withSysTags(sysTags: TagFilter): ShowResourceInstances {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: TagFilter  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): TagFilter | undefined {
        return this['sys_tags'];
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ShowResourceInstances {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withLimit(limit: string): ShowResourceInstances {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ShowResourceInstances {
        this['offset'] = offset;
        return this;
    }
    public withMatches(matches: Array<object>): ShowResourceInstances {
        this['matches'] = matches;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceInstancesActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
