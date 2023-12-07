import { PublicTags } from './PublicTags';


export class BatchCreateDeleteNatTagsRequestBody {
    public tags?: Array<PublicTags>;
    public action?: string;
    public constructor(tags?: Array<PublicTags>, action?: string) { 
        this['tags'] = tags;
        this['action'] = action;
    }
    public withTags(tags: Array<PublicTags>): BatchCreateDeleteNatTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: string): BatchCreateDeleteNatTagsRequestBody {
        this['action'] = action;
        return this;
    }
}