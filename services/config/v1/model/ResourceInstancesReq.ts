import { Match } from './Match';
import { Tag } from './Tag';


export class ResourceInstancesReq {
    private 'without_any_tag'?: boolean;
    public tags?: Array<Tag>;
    public matches?: Array<Match>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ResourceInstancesReq {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<Tag>): ResourceInstancesReq {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<Match>): ResourceInstancesReq {
        this['matches'] = matches;
        return this;
    }
}