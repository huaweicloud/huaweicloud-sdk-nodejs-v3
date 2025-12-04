import { Tag } from './Tag';


export class BatchCreateTagsRequestBody {
    public action?: string;
    public tags?: Array<Tag>;
    public constructor(action?: string, tags?: Array<Tag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: string): BatchCreateTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<Tag>): BatchCreateTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}