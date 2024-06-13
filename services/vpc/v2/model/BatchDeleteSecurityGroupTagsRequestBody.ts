import { ResourceTag } from './ResourceTag';


export class BatchDeleteSecurityGroupTagsRequestBody {
    public action?: BatchDeleteSecurityGroupTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteSecurityGroupTagsRequestBodyActionEnum | string): BatchDeleteSecurityGroupTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchDeleteSecurityGroupTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteSecurityGroupTagsRequestBodyActionEnum {
    DELETE = 'delete'
}
