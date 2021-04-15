import { ResourceTag } from './ResourceTag';


export class BatchCreateVpcTagsRequestBody {
    public action: BatchCreateVpcTagsRequestBodyActionEnum;
    public tags: Array<ResourceTag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateVpcTagsRequestBodyActionEnum): BatchCreateVpcTagsRequestBody {
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
