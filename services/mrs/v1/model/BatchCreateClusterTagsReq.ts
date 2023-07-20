import { Tag } from './Tag';


export class BatchCreateClusterTagsReq {
    public action?: BatchCreateClusterTagsReqActionEnum | string;
    public tags?: Array<Tag>;
    public constructor(action?: string, tags?: Array<Tag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchCreateClusterTagsReqActionEnum | string): BatchCreateClusterTagsReq {
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
