import { Match } from './Match';
import { Tags } from './Tags';


export class ListResourceInstancesRequestBody {
    public action?: ListResourceInstancesRequestBodyActionEnum | string;
    public offset?: string;
    public limit?: string;
    private 'without_any_tag'?: boolean;
    public tags?: Array<Tags>;
    public matches?: Array<Match>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: ListResourceInstancesRequestBodyActionEnum | string): ListResourceInstancesRequestBody {
        this['action'] = action;
        return this;
    }
    public withOffset(offset: string): ListResourceInstancesRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListResourceInstancesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListResourceInstancesRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<Tags>): ListResourceInstancesRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<Match>): ListResourceInstancesRequestBody {
        this['matches'] = matches;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourceInstancesRequestBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
