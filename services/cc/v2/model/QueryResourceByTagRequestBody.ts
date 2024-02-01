import { QueryTag } from './QueryTag';
import { TmsMatch } from './TmsMatch';


export class QueryResourceByTagRequestBody {
    private 'request_id'?: string;
    private 'without_any_tag'?: boolean;
    public tags?: Array<QueryTag>;
    private 'tags_any'?: Array<QueryTag>;
    private 'not_tags'?: Array<QueryTag>;
    private 'not_tags_any'?: Array<QueryTag>;
    public matches?: Array<TmsMatch>;
    public constructor() { 
    }
    public withRequestId(requestId: string): QueryResourceByTagRequestBody {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): QueryResourceByTagRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<QueryTag>): QueryResourceByTagRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withTagsAny(tagsAny: Array<QueryTag>): QueryResourceByTagRequestBody {
        this['tags_any'] = tagsAny;
        return this;
    }
    public set tagsAny(tagsAny: Array<QueryTag>  | undefined) {
        this['tags_any'] = tagsAny;
    }
    public get tagsAny(): Array<QueryTag> | undefined {
        return this['tags_any'];
    }
    public withNotTags(notTags: Array<QueryTag>): QueryResourceByTagRequestBody {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<QueryTag>  | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags(): Array<QueryTag> | undefined {
        return this['not_tags'];
    }
    public withNotTagsAny(notTagsAny: Array<QueryTag>): QueryResourceByTagRequestBody {
        this['not_tags_any'] = notTagsAny;
        return this;
    }
    public set notTagsAny(notTagsAny: Array<QueryTag>  | undefined) {
        this['not_tags_any'] = notTagsAny;
    }
    public get notTagsAny(): Array<QueryTag> | undefined {
        return this['not_tags_any'];
    }
    public withMatches(matches: Array<TmsMatch>): QueryResourceByTagRequestBody {
        this['matches'] = matches;
        return this;
    }
}