import { ResourceTagOption } from './ResourceTagOption';


export class BatchCreatePublicipTagsRequestBody {
    public tags: Array<ResourceTagOption>;
    public action: BatchCreatePublicipTagsRequestBodyActionEnum;
    public constructor(tags?: any, action?: any) { 
        this['tags'] = tags;
        this['action'] = action;
    }
    public withTags(tags: Array<ResourceTagOption>): BatchCreatePublicipTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: BatchCreatePublicipTagsRequestBodyActionEnum): BatchCreatePublicipTagsRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreatePublicipTagsRequestBodyActionEnum {
    CREATE = 'create'
}
