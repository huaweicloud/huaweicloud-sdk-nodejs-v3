import { ResourceDeleteTag } from './ResourceDeleteTag';


export class BatchDeleteClusterTagsRequestBody {
    public tags?: Array<ResourceDeleteTag>;
    public constructor(tags?: Array<ResourceDeleteTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceDeleteTag>): BatchDeleteClusterTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}