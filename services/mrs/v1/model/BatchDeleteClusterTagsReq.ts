import { Tag } from './Tag';


export class BatchDeleteClusterTagsReq {
    public action?: BatchDeleteClusterTagsReqActionEnum | string;
    public tags?: Array<Tag>;
    public constructor(action?: string, tags?: Array<Tag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteClusterTagsReqActionEnum | string): BatchDeleteClusterTagsReq {
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
