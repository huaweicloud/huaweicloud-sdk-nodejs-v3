import { ServerTag } from './ServerTag';


export class BatchDeleteServerTagsRequestBody {
    public action: BatchDeleteServerTagsRequestBodyActionEnum;
    public tags: Array<ServerTag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteServerTagsRequestBodyActionEnum): BatchDeleteServerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ServerTag>): BatchDeleteServerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteServerTagsRequestBodyActionEnum {
    DELETE = 'delete'
}
