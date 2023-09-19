import { SysTags } from './SysTags';
import { Tag } from './Tag';


export class BatchAddOrDeleteTagOnClusterReq {
    public action?: string;
    public tags?: Array<Tag>;
    public sysTags?: Array<SysTags>;
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
    public withSysTags(sysTags: Array<SysTags>): BatchAddOrDeleteTagOnClusterReq {
        this['sysTags'] = sysTags;
        return this;
    }
}