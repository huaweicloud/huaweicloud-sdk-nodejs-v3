import { Tag } from './Tag';


export class BatchDeleteResourceTagsRequestBody {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): BatchDeleteResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}