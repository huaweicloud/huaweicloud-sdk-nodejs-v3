import { ResourceTag } from './ResourceTag';


export class BatchDeleteLoadbalancerTagsRequestBody {
    public action: BatchDeleteLoadbalancerTagsRequestBodyActionEnum;
    public tags?: Array<ResourceTag>;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: BatchDeleteLoadbalancerTagsRequestBodyActionEnum): BatchDeleteLoadbalancerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchDeleteLoadbalancerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteLoadbalancerTagsRequestBodyActionEnum {
    DELETE = 'delete'
}
