import { Tag } from './Tag';


export class BatchCreateClusterTagsReq {
    public action: BatchCreateClusterTagsReqActionEnum;
    public tags: Array<Tag>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateClusterTagsReqActionEnum): BatchCreateClusterTagsReq {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): BatchCreateClusterTagsReq {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateClusterTagsReqActionEnum {
    CREATE = 'create'
}
