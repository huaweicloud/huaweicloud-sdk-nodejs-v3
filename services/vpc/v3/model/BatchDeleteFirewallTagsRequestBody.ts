import { DeleteResourceTagRequestBody } from './DeleteResourceTagRequestBody';


export class BatchDeleteFirewallTagsRequestBody {
    public tags?: Array<DeleteResourceTagRequestBody>;
    public constructor(tags?: Array<DeleteResourceTagRequestBody>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<DeleteResourceTagRequestBody>): BatchDeleteFirewallTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}