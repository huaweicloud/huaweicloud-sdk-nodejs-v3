import { ResourceTag } from './ResourceTag';


export class BatchDeleteListenerTagsRequestBody {
    public action?: BatchDeleteListenerTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteListenerTagsRequestBodyActionEnum | string): BatchDeleteListenerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchDeleteListenerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteListenerTagsRequestBodyActionEnum {
    DELETE = 'delete'
}
