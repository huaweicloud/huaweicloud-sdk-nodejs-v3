import { ResourceTag } from './ResourceTag';


export class BatchCreateSecurityGroupTagsRequestBody {
    public action?: BatchCreateSecurityGroupTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateSecurityGroupTagsRequestBodyActionEnum | string): BatchCreateSecurityGroupTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchCreateSecurityGroupTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateSecurityGroupTagsRequestBodyActionEnum {
    CREATE = 'create'
}
