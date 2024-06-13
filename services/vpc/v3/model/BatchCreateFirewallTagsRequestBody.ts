import { ResourceTag } from './ResourceTag';


export class BatchCreateFirewallTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTag>): BatchCreateFirewallTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}