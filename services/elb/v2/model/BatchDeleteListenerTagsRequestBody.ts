import { ResourceTag } from './ResourceTag';


export class BatchDeleteListenerTagsRequestBody {
    public action: BatchDeleteListenerTagsRequestBodyActionEnum;
    public tags?: Array<ResourceTag>;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: BatchDeleteListenerTagsRequestBodyActionEnum): BatchDeleteListenerTagsRequestBody {
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
