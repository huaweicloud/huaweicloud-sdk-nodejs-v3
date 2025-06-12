import { Tag } from './Tag';


export class BatchCreateResourceTagsRequestBody {
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withTags(tags: Array<Tag>): BatchCreateResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}