import { ResourceTag } from './ResourceTag';


export class BatchAddSharedTagsRequestBody {
    public action?: BatchAddSharedTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchAddSharedTagsRequestBodyActionEnum | string): BatchAddSharedTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchAddSharedTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchAddSharedTagsRequestBodyActionEnum {
    CREATE = 'create'
}
