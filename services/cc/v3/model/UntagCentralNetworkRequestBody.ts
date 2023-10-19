import { Tag } from './Tag';


export class UntagCentralNetworkRequestBody {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): UntagCentralNetworkRequestBody {
        this['tags'] = tags;
        return this;
    }
}