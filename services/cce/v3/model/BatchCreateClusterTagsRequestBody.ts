import { ResourceTag } from './ResourceTag';


export class BatchCreateClusterTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): BatchCreateClusterTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}