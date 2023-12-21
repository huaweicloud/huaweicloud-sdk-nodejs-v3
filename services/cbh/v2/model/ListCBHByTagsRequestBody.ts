import { Match } from './Match';
import { Tags } from './Tags';


export class ListCBHByTagsRequestBody {
    private 'without_any_tag'?: boolean;
    public tags?: Array<Tags>;
    private 'tags_any'?: Array<Tags>;
    private 'not_tags'?: Array<Tags>;
    private 'not_tags_any'?: Array<Tags>;
    private 'sys_tags'?: Array<Tags>;
    public matches?: Array<Match>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListCBHByTagsRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<Tags>): ListCBHByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<Tags>): ListCBHByTagsRequestBody {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<Tags>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<Tags> | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<Tags>): ListCBHByTagsRequestBody {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<Tags>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<Tags> | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<Tags>): ListCBHByTagsRequestBody {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<Tags>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<Tags> | undefined {
        return this['not_tags_any'];
    }
    public withSysTags(sysTags: Array<Tags>): ListCBHByTagsRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Tags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Tags> | undefined {
        return this['sys_tags'];
    }
    public withMatches(matches: Array<Match>): ListCBHByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
}