import { Tags } from './Tags';


export class BatchDeleteResourceTagsRequestBody {
    public tags?: Array<Tags>;
    public constructor() { 
    }
    public withTags(tags: Array<Tags>): BatchDeleteResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}