import { BatchAddServerTag } from './BatchAddServerTag';


export class BatchCreateServerTagsRequestBody {
    public action?: BatchCreateServerTagsRequestBodyActionEnum | string;
    public tags?: Array<BatchAddServerTag>;
    public constructor(action?: string, tags?: Array<BatchAddServerTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateServerTagsRequestBodyActionEnum | string): BatchCreateServerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<BatchAddServerTag>): BatchCreateServerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateServerTagsRequestBodyActionEnum {
    CREATE = 'create'
}
