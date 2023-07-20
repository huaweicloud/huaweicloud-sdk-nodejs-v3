import { TagWithKeyValue } from './TagWithKeyValue';


export class BatchTagActionAddRequestBody {
    public action?: string;
    public tags?: Array<TagWithKeyValue>;
    public constructor(action?: string, tags?: Array<TagWithKeyValue>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: string): BatchTagActionAddRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<TagWithKeyValue>): BatchTagActionAddRequestBody {
        this['tags'] = tags;
        return this;
    }
}