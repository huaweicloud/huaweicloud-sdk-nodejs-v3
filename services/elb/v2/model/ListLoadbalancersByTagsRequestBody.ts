import { ActionMatch } from './ActionMatch';
import { ActionTag } from './ActionTag';


export class ListLoadbalancersByTagsRequestBody {
    public offset?: number;
    public limit?: number;
    public action: string;
    public matches?: Array<ActionMatch>;
    public tags?: Array<ActionTag>;
    private 'without_any_tag'?: boolean | undefined;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withOffset(offset: number): ListLoadbalancersByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLoadbalancersByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withAction(action: string): ListLoadbalancersByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<ActionMatch>): ListLoadbalancersByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<ActionTag>): ListLoadbalancersByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListLoadbalancersByTagsRequestBody {
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