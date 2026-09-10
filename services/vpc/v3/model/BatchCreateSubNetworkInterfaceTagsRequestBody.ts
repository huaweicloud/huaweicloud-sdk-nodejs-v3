import { ResourceTag } from './ResourceTag';


export class BatchCreateSubNetworkInterfaceTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): BatchCreateSubNetworkInterfaceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}