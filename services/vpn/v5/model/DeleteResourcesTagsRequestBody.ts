import { ResourceTag } from './ResourceTag';


export class DeleteResourcesTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): DeleteResourcesTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}