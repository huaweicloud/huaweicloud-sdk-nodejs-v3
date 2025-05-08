import { ResourceTag } from './ResourceTag';


export class UpdateResourceTagsRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTag>): UpdateResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}