import { TagDelWithKeyValue } from './TagDelWithKeyValue';


export class BatchTagActionDelRequestBody {
    public action?: string;
    public tags?: Array<TagDelWithKeyValue>;
    public constructor(action?: string, tags?: Array<TagDelWithKeyValue>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: string): BatchTagActionDelRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<TagDelWithKeyValue>): BatchTagActionDelRequestBody {
        this['tags'] = tags;
        return this;
    }
}