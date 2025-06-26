import { ResourceTag } from './ResourceTag';


export class CreateResourceTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): CreateResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}