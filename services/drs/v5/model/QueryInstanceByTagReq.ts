import { Tag } from './Tag';
import { TagMatch } from './TagMatch';


export class QueryInstanceByTagReq {
    private 'without_any_tag'?: boolean;
    public tags?: Array<Tag>;
    public matches?: Array<TagMatch>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): QueryInstanceByTagReq {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<Tag>): QueryInstanceByTagReq {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<TagMatch>): QueryInstanceByTagReq {
        this['matches'] = matches;
        return this;
    }
}