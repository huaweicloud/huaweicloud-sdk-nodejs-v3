import { ResourceTag } from './ResourceTag';


export class BatchCreateLoadbalancerTagsRequestBody {
    public action?: BatchCreateLoadbalancerTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateLoadbalancerTagsRequestBodyActionEnum | string): BatchCreateLoadbalancerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchCreateLoadbalancerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateLoadbalancerTagsRequestBodyActionEnum {
    CREATE = 'create'
}
