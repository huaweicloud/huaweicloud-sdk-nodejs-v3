import { TagKeyValue } from './TagKeyValue';
import { Tags } from './Tags';


export class ListImageByTagsRequestBody {
    public action: ListImageByTagsRequestBodyActionEnum;
    public tags?: Array<Tags>;
    private 'tags_any'?: Array<Tags> | undefined;
    private 'not_tags'?: Array<Tags> | undefined;
    private 'not_tags_any'?: Array<Tags> | undefined;
    public limit?: string;
    public offset?: string;
    public matches?: Array<TagKeyValue>;
    private 'without_any_tag'?: boolean | undefined;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: ListImageByTagsRequestBodyActionEnum): ListImageByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tags>): ListImageByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<Tags>): ListImageByTagsRequestBody {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<Tags> | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny() {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<Tags>): ListImageByTagsRequestBody {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<Tags> | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags() {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<Tags>): ListImageByTagsRequestBody {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<Tags> | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny() {
        return this['not_tags_any'];
    }
    public withLimit(limit: string): ListImageByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListImageByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withMatches(matches: Array<TagKeyValue>): ListImageByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListImageByTagsRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag() {
        return this['without_any_tag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListImageByTagsRequestBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
