import { ScsResourceTag } from './ScsResourceTag';


export class BatchCreateOrDeleteTagsRequestBody {
    public action?: string;
    public tags?: Array<ScsResourceTag>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): BatchCreateOrDeleteTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ScsResourceTag>): BatchCreateOrDeleteTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}