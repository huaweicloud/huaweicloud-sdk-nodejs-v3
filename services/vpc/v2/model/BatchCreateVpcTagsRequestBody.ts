import { ResourceTag } from './ResourceTag';


export class BatchCreateVpcTagsRequestBody {
    public action?: BatchCreateVpcTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateVpcTagsRequestBodyActionEnum | string): BatchCreateVpcTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchCreateVpcTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateVpcTagsRequestBodyActionEnum {
    CREATE = 'create'
}
