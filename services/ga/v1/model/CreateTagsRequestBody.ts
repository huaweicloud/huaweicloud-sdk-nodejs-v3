import { ResourceTag } from './ResourceTag';


export class CreateTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): CreateTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}