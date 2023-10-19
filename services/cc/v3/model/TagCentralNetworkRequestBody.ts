import { Tag } from './Tag';


export class TagCentralNetworkRequestBody {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): TagCentralNetworkRequestBody {
        this['tags'] = tags;
        return this;
    }
}