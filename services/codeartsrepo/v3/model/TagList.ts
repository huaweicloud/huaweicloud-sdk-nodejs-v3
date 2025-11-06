import { Tag } from './Tag';


export class TagList {
    public tags?: Array<Tag>;
    public total?: number;
    public constructor() { 
    }
    public withTags(tags: Array<Tag>): TagList {
        this['tags'] = tags;
        return this;
    }
    public withTotal(total: number): TagList {
        this['total'] = total;
        return this;
    }
}