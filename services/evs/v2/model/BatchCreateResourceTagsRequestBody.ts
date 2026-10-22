import { CreateResourceTag } from './CreateResourceTag';


export class BatchCreateResourceTagsRequestBody {
    public tags?: Array<CreateResourceTag>;
    public constructor(tags?: Array<CreateResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<CreateResourceTag>): BatchCreateResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}