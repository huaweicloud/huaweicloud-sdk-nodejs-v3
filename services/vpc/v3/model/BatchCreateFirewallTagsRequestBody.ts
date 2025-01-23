import { ResourceTag } from './ResourceTag';


export class BatchCreateFirewallTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): BatchCreateFirewallTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}