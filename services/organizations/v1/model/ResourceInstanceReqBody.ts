import { Match } from './Match';
import { TagsDTO } from './TagsDTO';


export class ResourceInstanceReqBody {
    private 'without_any_tag'?: boolean;
    public tags?: Array<TagsDTO>;
    public matches?: Array<Match>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ResourceInstanceReqBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<TagsDTO>): ResourceInstanceReqBody {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<Match>): ResourceInstanceReqBody {
        this['matches'] = matches;
        return this;
    }
}