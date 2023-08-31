import { Tag } from './Tag';


export class BatchOperateResourceTagsRequestBody {
    public action?: BatchOperateResourceTagsRequestBodyActionEnum | string;
    public tags?: Array<Tag>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: BatchOperateResourceTagsRequestBodyActionEnum | string): BatchOperateResourceTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): BatchOperateResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchOperateResourceTagsRequestBodyActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
