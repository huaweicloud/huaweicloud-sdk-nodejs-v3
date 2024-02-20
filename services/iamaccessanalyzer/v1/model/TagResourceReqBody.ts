import { Tag } from './Tag';


export class TagResourceReqBody {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): TagResourceReqBody {
        this['tags'] = tags;
        return this;
    }
}