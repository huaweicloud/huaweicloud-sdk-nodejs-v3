import { Tag } from './Tag';


export class TagCloudConnectionRequestBody {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): TagCloudConnectionRequestBody {
        this['tags'] = tags;
        return this;
    }
}