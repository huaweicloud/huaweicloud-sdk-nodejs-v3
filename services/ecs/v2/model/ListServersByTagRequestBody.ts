import { ServerTagMatch } from './ServerTagMatch';
import { ServerTags } from './ServerTags';


export class ListServersByTagRequestBody {
    public action: string;
    public limit?: string;
    public offset?: string;
    public tags?: Array<ServerTags>;
    private 'not_tags'?: Array<ServerTags> | undefined;
    public matches?: Array<ServerTagMatch>;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: string): ListServersByTagRequestBody {
        this['action'] = action;
        return this;
    }
    public withLimit(limit: string): ListServersByTagRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListServersByTagRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withTags(tags: Array<ServerTags>): ListServersByTagRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withNotTags(notTags: Array<ServerTags>): ListServersByTagRequestBody {
        this['not_tags'] = notTags;
        return this;
    }
    public set notTags(notTags: Array<ServerTags> | undefined) {
        this['not_tags'] = notTags;
    }
    public get notTags() {
        return this['not_tags'];
    }
    public withMatches(matches: Array<ServerTagMatch>): ListServersByTagRequestBody {
        this['matches'] = matches;
        return this;
    }
}