import { Tag } from './Tag';


export class BatchCreateResourceTagsRequestBody {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): BatchCreateResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}