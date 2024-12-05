import { ResourceTag } from './ResourceTag';
import { Tag } from './Tag';


export class ListSharesByTagRequestBody {
    public action?: ListSharesByTagRequestBodyActionEnum | string;
    public limit?: string;
    public offset?: string;
    private 'without_any_tag'?: boolean;
    public tags?: Array<Tag>;
    public matches?: Array<ResourceTag>;
    public constructor() { 
    }
    public withAction(action: ListSharesByTagRequestBodyActionEnum | string): ListSharesByTagRequestBody {
        this['action'] = action;
        return this;
    }
    public withLimit(limit: string): ListSharesByTagRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListSharesByTagRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ListSharesByTagRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<Tag>): ListSharesByTagRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<ResourceTag>): ListSharesByTagRequestBody {
        this['matches'] = matches;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSharesByTagRequestBodyActionEnum {
    FILTER = 'filter',
    COUNT = 'count'
}
