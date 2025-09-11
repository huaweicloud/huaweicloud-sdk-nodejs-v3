import { ResourceInstanceTagRequestMatches } from './ResourceInstanceTagRequestMatches';
import { TagKeyValuesBean } from './TagKeyValuesBean';


export class ResourceInstanceTagRequest {
    public matches?: Array<ResourceInstanceTagRequestMatches>;
    private 'not_tags'?: Array<TagKeyValuesBean>;
    public tags?: Array<TagKeyValuesBean>;
    private 'tags_any'?: Array<TagKeyValuesBean>;
    private 'not_tags_any'?: Array<TagKeyValuesBean>;
    private 'sys_tags'?: Array<TagKeyValuesBean>;
    private 'without_any_tag'?: boolean;
    public constructor() { 
    }
    public withMatches(matches: Array<ResourceInstanceTagRequestMatches>): ResourceInstanceTagRequest {
        this['matches'] = matches;
        return this;
    }
    public withNotTags(notTags: Array<TagKeyValuesBean>): ResourceInstanceTagRequest {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<TagKeyValuesBean>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<TagKeyValuesBean> | undefined {
        return this['not_tags'];
    }
    public withTags(tags: Array<TagKeyValuesBean>): ResourceInstanceTagRequest {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<TagKeyValuesBean>): ResourceInstanceTagRequest {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<TagKeyValuesBean>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<TagKeyValuesBean> | undefined {
        return this['tags_any'];
    }
    public withNotTagsAny(notTagsAny: Array<TagKeyValuesBean>): ResourceInstanceTagRequest {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<TagKeyValuesBean>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<TagKeyValuesBean> | undefined {
        return this['not_tags_any'];
    }
    public withSysTags(sysTags: Array<TagKeyValuesBean>): ResourceInstanceTagRequest {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TagKeyValuesBean>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<TagKeyValuesBean> | undefined {
        return this['sys_tags'];
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ResourceInstanceTagRequest {
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