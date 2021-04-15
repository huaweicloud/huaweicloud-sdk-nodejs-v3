import { ResourceTag } from './ResourceTag';


export class BatchCreateSubnetTagsRequestBody {
    public action: BatchCreateSubnetTagsRequestBodyActionEnum;
    public tags: Array<ResourceTag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateSubnetTagsRequestBodyActionEnum): BatchCreateSubnetTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchCreateSubnetTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateSubnetTagsRequestBodyActionEnum {
    CREATE = 'create'
}
