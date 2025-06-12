import { Match } from './Match';
import { TagWithValues } from './TagWithValues';


export class ListResourcesByTagsRequestBody {
    private 'without_any_tag'?: boolean;
    public tags?: Array<TagWithValues>;
    public matches?: Array<Match>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListResourcesByTagsRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<TagWithValues>): ListResourcesByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<Match>): ListResourcesByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
}