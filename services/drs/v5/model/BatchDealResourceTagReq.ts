import { BatchResourceTag } from './BatchResourceTag';


export class BatchDealResourceTagReq {
    public action?: BatchDealResourceTagReqActionEnum | string;
    public tags?: Array<BatchResourceTag>;
    public constructor(action?: string, tags?: Array<BatchResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDealResourceTagReqActionEnum | string): BatchDealResourceTagReq {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<BatchResourceTag>): BatchDealResourceTagReq {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDealResourceTagReqActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
