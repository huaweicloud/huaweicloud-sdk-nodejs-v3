import { CreateRouteTags } from './CreateRouteTags';


export class CreateRoute {
    public name?: string;
    public weight?: number;
    public tags?: CreateRouteTags;
    public constructor() { 
    }
    public withName(name: string): CreateRoute {
        this['name'] = name;
        return this;
    }
    public withWeight(weight: number): CreateRoute {
        this['weight'] = weight;
        return this;
    }
    public withTags(tags: CreateRouteTags): CreateRoute {
        this['tags'] = tags;
        return this;
    }
}