import { ResourceTag } from './ResourceTag';


export class BatchCreatePortTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTag>): BatchCreatePortTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}