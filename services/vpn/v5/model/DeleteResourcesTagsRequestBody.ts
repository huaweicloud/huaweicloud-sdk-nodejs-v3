import { ResourceTag } from './ResourceTag';


export class DeleteResourcesTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTag>): DeleteResourcesTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}