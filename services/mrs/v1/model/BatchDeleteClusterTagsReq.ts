import { Tag } from './Tag';


export class BatchDeleteClusterTagsReq {
    public action: BatchDeleteClusterTagsReqActionEnum;
    public tags: Array<Tag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteClusterTagsReqActionEnum): BatchDeleteClusterTagsReq {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): BatchDeleteClusterTagsReq {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteClusterTagsReqActionEnum {
    DELETE = 'delete'
}
