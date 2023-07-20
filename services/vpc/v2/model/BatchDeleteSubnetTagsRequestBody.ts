import { ResourceTag } from './ResourceTag';


export class BatchDeleteSubnetTagsRequestBody {
    public action?: BatchDeleteSubnetTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteSubnetTagsRequestBodyActionEnum | string): BatchDeleteSubnetTagsRequestBody {
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
