import { BaremetalServerTag } from './BaremetalServerTag';


export class BatchCreateBaremetalServerTagsRequestBody {
    public action?: BatchCreateBaremetalServerTagsRequestBodyActionEnum | string;
    public tags?: Array<BaremetalServerTag>;
    public constructor(action?: string, tags?: Array<BaremetalServerTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateBaremetalServerTagsRequestBodyActionEnum | string): BatchCreateBaremetalServerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<BaremetalServerTag>): BatchCreateBaremetalServerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateBaremetalServerTagsRequestBodyActionEnum {
    CREATE = 'create'
}
