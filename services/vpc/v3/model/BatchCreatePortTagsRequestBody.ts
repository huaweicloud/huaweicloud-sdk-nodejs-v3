import { ResourceTag } from './ResourceTag';


export class BatchCreatePortTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): BatchCreatePortTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}