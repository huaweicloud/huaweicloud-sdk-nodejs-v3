import { ResourceTag } from './ResourceTag';


export class BatchCreateLoadbalancerTagsRequestBody {
    public action: BatchCreateLoadbalancerTagsRequestBodyActionEnum;
    public tags?: Array<ResourceTag>;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: BatchCreateLoadbalancerTagsRequestBodyActionEnum): BatchCreateLoadbalancerTagsRequestBody {
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
