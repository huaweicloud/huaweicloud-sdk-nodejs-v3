import { ActionMatch } from './ActionMatch';
import { ActionTag } from './ActionTag';


export class ListListenersByTagsRequestBody {
    public offset?: number;
    public limit?: number;
    public action: string;
    public matches?: Array<ActionMatch>;
    public tags?: Array<ActionTag>;
    private 'without_any_tag'?: boolean | undefined;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withOffset(offset: number): ListListenersByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListListenersByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withAction(action: string): ListListenersByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withMatches(matches: Array<ActionMatch>): ListListenersByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<ActionTag>): ListListenersByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListListenersByTagsRequestBody {
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