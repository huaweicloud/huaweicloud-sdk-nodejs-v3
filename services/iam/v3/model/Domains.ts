import { LinksSelf } from './LinksSelf';


export class Domains {
    public enabled: boolean;
    public id: string;
    public name: string;
    public links: LinksSelf;
    public description: string;
    public constructor(enabled?: any, id?: any, name?: any, links?: any, description?: any) { 
        this['enabled'] = enabled;
        this['id'] = id;
        this['name'] = name;
        this['links'] = links;
        this['description'] = description;
    }
    public withEnabled(enabled: boolean): Domains {
        this['enabled'] = enabled;
        return this;
    }
    public withId(id: string): Domains {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Domains {
        this['name'] = name;
        return this;
    }
    public withLinks(links: LinksSelf): Domains {
        this['links'] = links;
        return this;
    }
    public withDescription(description: string): Domains {
        this['description'] = description;
        return this;
    }
}