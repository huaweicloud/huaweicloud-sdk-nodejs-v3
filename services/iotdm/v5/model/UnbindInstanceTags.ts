import { Tag } from './Tag';


export class UnbindInstanceTags {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): UnbindInstanceTags {
        this['tags'] = tags;
        return this;
    }
}