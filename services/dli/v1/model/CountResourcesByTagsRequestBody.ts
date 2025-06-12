import { Match } from './Match';
import { TagWithValues } from './TagWithValues';


export class CountResourcesByTagsRequestBody {
    private 'without_any_tag'?: boolean;
    public tags?: Array<TagWithValues>;
    public matches?: Array<Match>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): CountResourcesByTagsRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<TagWithValues>): CountResourcesByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<Match>): CountResourcesByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
}