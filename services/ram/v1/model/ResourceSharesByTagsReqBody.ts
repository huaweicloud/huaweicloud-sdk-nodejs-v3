import { Match } from './Match';
import { TagFilter } from './TagFilter';


export class ResourceSharesByTagsReqBody {
    private 'without_any_tag'?: boolean;
    public tags?: Array<TagFilter>;
    public matches?: Array<Match>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ResourceSharesByTagsReqBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<TagFilter>): ResourceSharesByTagsReqBody {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<Match>): ResourceSharesByTagsReqBody {
        this['matches'] = matches;
        return this;
    }
}