import { Match } from './Match';
import { TagValuesList } from './TagValuesList';


export class QueryResourceInstanceTagsBody {
    public tags?: Array<TagValuesList>;
    private 'tags_any'?: Array<TagValuesList> | undefined;
    private 'not_tags'?: Array<TagValuesList> | undefined;
    private 'not_tags_any'?: Array<TagValuesList> | undefined;
    private 'sys_tags'?: Array<TagValuesList> | undefined;
    public limit?: string;
    public offset?: string;
    public action: string;
    public matches?: Array<Match>;
    private 'without_any_tag'?: boolean | undefined;
    public constructor(action?: any) { 
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
    public set tagsAny(tagsAny: Array<TagValuesList> | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny() {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<TagValuesList>): QueryResourceInstanceTagsBody {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<TagValuesList> | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags() {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<TagValuesList>): QueryResourceInstanceTagsBody {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<TagValuesList> | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny() {
        return this['not_tags_any'];
    }
    public withSysTags(sysTags: Array<TagValuesList>): QueryResourceInstanceTagsBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TagValuesList> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
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
    public withAction(action: string): QueryResourceInstanceTagsBody {
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
    public set withoutAnyTag(withoutAnyTag: boolean | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag() {
        return this['without_any_tag'];
    }
}