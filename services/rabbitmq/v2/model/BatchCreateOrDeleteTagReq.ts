import { TagEntity } from './TagEntity';


export class BatchCreateOrDeleteTagReq {
    public action?: BatchCreateOrDeleteTagReqActionEnum | string;
    public tags?: Array<TagEntity>;
    public constructor() { 
    }
    public withAction(action: BatchCreateOrDeleteTagReqActionEnum | string): BatchCreateOrDeleteTagReq {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<TagEntity>): BatchCreateOrDeleteTagReq {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateOrDeleteTagReqActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
