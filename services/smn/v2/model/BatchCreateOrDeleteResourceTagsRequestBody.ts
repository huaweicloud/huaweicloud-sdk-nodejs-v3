import { ResourceTag } from './ResourceTag';


export class BatchCreateOrDeleteResourceTagsRequestBody {
    public tags: Array<ResourceTag>;
    public action: string;
    public constructor(tags?: any, action?: any) { 
        this['tags'] = tags;
        this['action'] = action;
    }
    public withTags(tags: Array<ResourceTag>): BatchCreateOrDeleteResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAction(action: string): BatchCreateOrDeleteResourceTagsRequestBody {
        this['action'] = action;
        return this;
    }
}