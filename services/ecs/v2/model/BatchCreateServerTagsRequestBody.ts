import { ServerTag } from './ServerTag';


export class BatchCreateServerTagsRequestBody {
    public action: BatchCreateServerTagsRequestBodyActionEnum;
    public tags: Array<ServerTag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateServerTagsRequestBodyActionEnum): BatchCreateServerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ServerTag>): BatchCreateServerTagsRequestBody {
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
