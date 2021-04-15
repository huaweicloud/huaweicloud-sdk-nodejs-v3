import { ResourceTag } from './ResourceTag';


export class BatchAddOrDeleteTagsRequestBody {
    public action: BatchAddOrDeleteTagsRequestBodyActionEnum;
    public tags: Array<ResourceTag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchAddOrDeleteTagsRequestBodyActionEnum): BatchAddOrDeleteTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchAddOrDeleteTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchAddOrDeleteTagsRequestBodyActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
