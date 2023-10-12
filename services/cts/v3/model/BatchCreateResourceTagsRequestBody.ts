import { Tags } from './Tags';


export class BatchCreateResourceTagsRequestBody {
    public tags?: Array<Tags>;
    public constructor() { 
    }
    public withTags(tags: Array<Tags>): BatchCreateResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}