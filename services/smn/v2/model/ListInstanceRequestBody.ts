import { ResourceTags } from './ResourceTags';
import { TagMatch } from './TagMatch';


export class ListInstanceRequestBody {
    public tags?: Array<ResourceTags>;
    private 'tags_any'?: Array<ResourceTags>;
    private 'not_tags'?: Array<ResourceTags>;
    private 'not_tags_any'?: Array<ResourceTags>;
    public offset?: string;
    public limit?: string;
    public action?: string;
    public matches?: Array<TagMatch>;
    private 'without_any_tag'?: boolean;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withTags(tags: Array<ResourceTags>): ListInstanceRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<ResourceTags>): ListInstanceRequestBody {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<ResourceTags>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<ResourceTags> | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<ResourceTags>): ListInstanceRequestBody {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<ResourceTags>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<ResourceTags> | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<ResourceTags>): ListInstanceRequestBody {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<ResourceTags>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<ResourceTags> | undefined {
        return this['not_tags_any'];
    }
    public withOffset(offset: string): ListInstanceRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListInstanceRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withAction(action: string): ListInstanceRequestBody {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<TagMatch>): ListInstanceRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListInstanceRequestBody {
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