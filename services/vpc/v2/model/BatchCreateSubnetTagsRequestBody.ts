import { ResourceTag } from './ResourceTag';


export class BatchCreateSubnetTagsRequestBody {
    public action?: BatchCreateSubnetTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateSubnetTagsRequestBodyActionEnum | string): BatchCreateSubnetTagsRequestBody {
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
