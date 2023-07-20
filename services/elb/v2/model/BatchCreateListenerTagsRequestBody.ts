import { ResourceTag } from './ResourceTag';


export class BatchCreateListenerTagsRequestBody {
    public action?: BatchCreateListenerTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateListenerTagsRequestBodyActionEnum | string): BatchCreateListenerTagsRequestBody {
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
