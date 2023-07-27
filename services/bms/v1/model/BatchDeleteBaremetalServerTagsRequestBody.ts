import { BaremetalServerTag } from './BaremetalServerTag';


export class BatchDeleteBaremetalServerTagsRequestBody {
    public action?: BatchDeleteBaremetalServerTagsRequestBodyActionEnum | string;
    public tags?: Array<BaremetalServerTag>;
    public constructor(action?: string, tags?: Array<BaremetalServerTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteBaremetalServerTagsRequestBodyActionEnum | string): BatchDeleteBaremetalServerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<BaremetalServerTag>): BatchDeleteBaremetalServerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteBaremetalServerTagsRequestBodyActionEnum {
    DELETE = 'delete'
}
