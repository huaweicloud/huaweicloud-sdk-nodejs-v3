import { ResourceTag } from './ResourceTag';


export class BatchDeleteVpcTagsRequestBody {
    public action: BatchDeleteVpcTagsRequestBodyActionEnum;
    public tags: Array<ResourceTag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteVpcTagsRequestBodyActionEnum): BatchDeleteVpcTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchDeleteVpcTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteVpcTagsRequestBodyActionEnum {
    DELETE = 'delete'
}
