import { ResourceTagOption } from './ResourceTagOption';


export class BatchDeletePublicipTagsRequestBody {
    public tags: Array<ResourceTagOption>;
    public action: BatchDeletePublicipTagsRequestBodyActionEnum;
    public constructor(tags?: any, action?: any) { 
        this['tags'] = tags;
        this['action'] = action;
    }
    public withTags(tags: Array<ResourceTagOption>): BatchDeletePublicipTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: BatchDeletePublicipTagsRequestBodyActionEnum): BatchDeletePublicipTagsRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeletePublicipTagsRequestBodyActionEnum {
    DELETE = 'delete'
}
