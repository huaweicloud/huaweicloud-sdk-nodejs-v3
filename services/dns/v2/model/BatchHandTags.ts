import { Tag } from './Tag';


export class BatchHandTags {
    public tags: Array<Tag>;
    public action: string;
    public constructor(tags?: any, action?: any) { 
        this['tags'] = tags;
        this['action'] = action;
    }
    public withTags(tags: Array<Tag>): BatchHandTags {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: string): BatchHandTags {
        this['action'] = action;
        return this;
    }
}