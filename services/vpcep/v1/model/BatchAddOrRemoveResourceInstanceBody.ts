import { ResourceTag } from './ResourceTag';


export class BatchAddOrRemoveResourceInstanceBody {
    public tags?: Array<ResourceTag>;
    public action: string;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withTags(tags: Array<ResourceTag>): BatchAddOrRemoveResourceInstanceBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: string): BatchAddOrRemoveResourceInstanceBody {
        this['action'] = action;
        return this;
    }
}