import { ResourceTag } from './ResourceTag';


export class BatchDeleteFirewallTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTag>): BatchDeleteFirewallTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}