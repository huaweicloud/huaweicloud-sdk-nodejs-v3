import { ResourceTag } from './ResourceTag';


export class CreateResourcesTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): CreateResourcesTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}