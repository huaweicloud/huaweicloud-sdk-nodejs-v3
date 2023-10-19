import { Tag } from './Tag';


export class Tags {
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withTags(tags: Array<Tag>): Tags {
        this['tags'] = tags;
        return this;
    }
}