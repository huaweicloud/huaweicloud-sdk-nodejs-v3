import { Tag } from './Tag';


export class CreateRouteTable {
    public name?: string;
    public description?: string;
    public tags?: Array<Tag>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateRouteTable {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateRouteTable {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<Tag>): CreateRouteTable {
        this['tags'] = tags;
        return this;
    }
}