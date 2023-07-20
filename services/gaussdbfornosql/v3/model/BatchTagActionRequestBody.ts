import { BatchTagActionTagOption } from './BatchTagActionTagOption';


export class BatchTagActionRequestBody {
    public action?: BatchTagActionRequestBodyActionEnum | string;
    public tags?: Array<BatchTagActionTagOption>;
    public constructor(action?: string, tags?: Array<BatchTagActionTagOption>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchTagActionRequestBodyActionEnum | string): BatchTagActionRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<BatchTagActionTagOption>): BatchTagActionRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchTagActionRequestBodyActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
