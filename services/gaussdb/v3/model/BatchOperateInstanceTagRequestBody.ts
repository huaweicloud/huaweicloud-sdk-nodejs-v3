import { TagItem } from './TagItem';


export class BatchOperateInstanceTagRequestBody {
    public action?: string;
    public tags?: Array<TagItem>;
    public constructor(action?: string, tags?: Array<TagItem>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: string): BatchOperateInstanceTagRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<TagItem>): BatchOperateInstanceTagRequestBody {
        this['tags'] = tags;
        return this;
    }
}