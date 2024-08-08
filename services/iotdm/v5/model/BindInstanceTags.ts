import { Tag } from './Tag';


export class BindInstanceTags {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): BindInstanceTags {
        this['tags'] = tags;
        return this;
    }
}