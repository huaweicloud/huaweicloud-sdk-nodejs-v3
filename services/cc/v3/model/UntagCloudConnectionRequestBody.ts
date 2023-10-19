import { Tag } from './Tag';


export class UntagCloudConnectionRequestBody {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): UntagCloudConnectionRequestBody {
        this['tags'] = tags;
        return this;
    }
}