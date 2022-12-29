import { ResourceTag } from './ResourceTag';


export class BatchCreateListenerTagsRequestBody {
    public action: BatchCreateListenerTagsRequestBodyActionEnum;
    public tags: Array<ResourceTag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateListenerTagsRequestBodyActionEnum): BatchCreateListenerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchCreateListenerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateListenerTagsRequestBodyActionEnum {
    CREATE = 'create'
}
