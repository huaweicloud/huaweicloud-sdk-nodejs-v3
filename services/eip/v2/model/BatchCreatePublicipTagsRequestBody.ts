import { ResourceTagOption } from './ResourceTagOption';


export class BatchCreatePublicipTagsRequestBody {
    public tags?: Array<ResourceTagOption>;
    public action?: BatchCreatePublicipTagsRequestBodyActionEnum | string;
    public constructor(tags?: Array<ResourceTagOption>, action?: string) { 
        this['tags'] = tags;
        this['action'] = action;
    }
    public withTags(tags: Array<ResourceTagOption>): BatchCreatePublicipTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: BatchCreatePublicipTagsRequestBodyActionEnum | string): BatchCreatePublicipTagsRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreatePublicipTagsRequestBodyActionEnum {
    CREATE = 'create'
}
