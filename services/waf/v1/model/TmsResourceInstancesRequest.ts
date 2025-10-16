import { TmsResourceInstancesTag } from './TmsResourceInstancesTag';
import { TmsResourceTag } from './TmsResourceTag';


export class TmsResourceInstancesRequest {
    public offset?: number;
    public limit?: number;
    public action?: string;
    public tags?: Array<TmsResourceInstancesTag>;
    private 'sys_tags'?: Array<TmsResourceInstancesTag>;
    public matches?: Array<TmsResourceTag>;
    private 'without_any_tag'?: string;
    private 'tags_any'?: Array<TmsResourceInstancesTag>;
    private 'not_tags_any'?: Array<TmsResourceInstancesTag>;
    private 'not_tags'?: Array<TmsResourceInstancesTag>;
    public constructor() { 
    }
    public withOffset(offset: number): TmsResourceInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): TmsResourceInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withAction(action: string): TmsResourceInstancesRequest {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<TmsResourceInstancesTag>): TmsResourceInstancesRequest {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<TmsResourceInstancesTag>): TmsResourceInstancesRequest {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TmsResourceInstancesTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<TmsResourceInstancesTag> | undefined {
        return this['sys_tags'];
    }
    public withMatches(matches: Array<TmsResourceTag>): TmsResourceInstancesRequest {
        this['matches'] = matches;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: string): TmsResourceInstancesRequest {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: string  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): string | undefined {
        return this['without_any_tag'];
    }
    public withTagsAny(tagsAny: Array<TmsResourceInstancesTag>): TmsResourceInstancesRequest {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<TmsResourceInstancesTag>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<TmsResourceInstancesTag> | undefined {
        return this['tags_any'];
    }
    public withNotTagsAny(notTagsAny: Array<TmsResourceInstancesTag>): TmsResourceInstancesRequest {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<TmsResourceInstancesTag>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<TmsResourceInstancesTag> | undefined {
        return this['not_tags_any'];
    }
    public withNotTags(notTags: Array<TmsResourceInstancesTag>): TmsResourceInstancesRequest {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<TmsResourceInstancesTag>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<TmsResourceInstancesTag> | undefined {
        return this['not_tags'];
    }
}