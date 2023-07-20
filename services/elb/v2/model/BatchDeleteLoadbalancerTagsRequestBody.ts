import { ResourceTag } from './ResourceTag';


export class BatchDeleteLoadbalancerTagsRequestBody {
    public action?: BatchDeleteLoadbalancerTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteLoadbalancerTagsRequestBodyActionEnum | string): BatchDeleteLoadbalancerTagsRequestBody {
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
