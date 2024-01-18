import { ResourceTag } from './ResourceTag';


export class CreateResourcesTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTag>): CreateResourcesTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}