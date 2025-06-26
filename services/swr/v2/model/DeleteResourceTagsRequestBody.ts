import { ResourceTag } from './ResourceTag';


export class DeleteResourceTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): DeleteResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}