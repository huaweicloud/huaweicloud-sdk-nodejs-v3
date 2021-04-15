import { ResourceTag } from './ResourceTag';


export class BatchDeleteSubnetTagsRequestBody {
    public action: BatchDeleteSubnetTagsRequestBodyActionEnum;
    public tags: Array<ResourceTag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteSubnetTagsRequestBodyActionEnum): BatchDeleteSubnetTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchDeleteSubnetTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteSubnetTagsRequestBodyActionEnum {
    DELETE = 'delete'
}
