import { Tag } from './Tag';


export class BatchDeleteTagsRequestBody {
    public action?: string;
    public tags?: Array<Tag>;
    public constructor(action?: string, tags?: Array<Tag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: string): BatchDeleteTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): BatchDeleteTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}