import { ResourceTag } from './ResourceTag';


export class BatchDeleteVpcTagsRequestBody {
    public action?: BatchDeleteVpcTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteVpcTagsRequestBodyActionEnum | string): BatchDeleteVpcTagsRequestBody {
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
