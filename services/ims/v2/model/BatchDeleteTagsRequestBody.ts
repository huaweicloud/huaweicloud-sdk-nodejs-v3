import { ResourceTag } from './ResourceTag';


export class BatchDeleteTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): BatchDeleteTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}