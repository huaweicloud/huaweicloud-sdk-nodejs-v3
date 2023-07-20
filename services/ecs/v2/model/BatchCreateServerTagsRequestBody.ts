import { ServerTag } from './ServerTag';


export class BatchCreateServerTagsRequestBody {
    public action?: BatchCreateServerTagsRequestBodyActionEnum | string;
    public tags?: Array<ServerTag>;
    public constructor(action?: string, tags?: Array<ServerTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateServerTagsRequestBodyActionEnum | string): BatchCreateServerTagsRequestBody {
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
