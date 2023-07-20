import { ActionMatch } from './ActionMatch';
import { ActionTag } from './ActionTag';


export class ListListenersByTagsRequestBody {
    public offset?: number;
    public limit?: number;
    public action?: string;
    public matches?: Array<ActionMatch>;
    public tags?: Array<ActionTag>;
    public constructor(action?: string) { 
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
}