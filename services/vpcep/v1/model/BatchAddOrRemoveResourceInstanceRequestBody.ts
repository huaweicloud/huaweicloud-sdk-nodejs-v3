import { ResourceTag } from './ResourceTag';


export class BatchAddOrRemoveResourceInstanceRequestBody {
    public tags?: Array<ResourceTag>;
    public action?: BatchAddOrRemoveResourceInstanceRequestBodyActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withTags(tags: Array<ResourceTag>): BatchAddOrRemoveResourceInstanceRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: BatchAddOrRemoveResourceInstanceRequestBodyActionEnum | string): BatchAddOrRemoveResourceInstanceRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchAddOrRemoveResourceInstanceRequestBodyActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
