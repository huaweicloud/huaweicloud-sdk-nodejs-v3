import { ResourceTag } from './ResourceTag';


export class CreateTagsRequestBody {
    public tags: Array<ResourceTag>;
    public constructor(tags?: any) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): CreateTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}