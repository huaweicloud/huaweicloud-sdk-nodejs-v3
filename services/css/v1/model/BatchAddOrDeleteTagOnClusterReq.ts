import { Tag } from './Tag';


export class BatchAddOrDeleteTagOnClusterReq {
    public action?: string;
    public tags?: Array<Tag>;
    public constructor(action?: string, tags?: Array<Tag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: string): BatchAddOrDeleteTagOnClusterReq {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): BatchAddOrDeleteTagOnClusterReq {
        this['tags'] = tags;
        return this;
    }
}