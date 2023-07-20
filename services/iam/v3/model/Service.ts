import { Links } from './Links';


export class Service {
    public name?: string;
    public description?: string;
    public links?: Links;
    public id?: string;
    public type?: string;
    public enabled?: boolean;
    public constructor(name?: string, links?: Links, id?: string, type?: string, enabled?: boolean) { 
        this['name'] = name;
        this['links'] = links;
        this['id'] = id;
        this['type'] = type;
        this['enabled'] = enabled;
    }
    public withName(name: string): Service {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Service {
        this['description'] = description;
        return this;
    }
    public withLinks(links: Links): Service {
        this['links'] = links;
        return this;
    }
    public withId(id: string): Service {
        this['id'] = id;
        return this;
    }
    public withType(type: string): Service {
        this['type'] = type;
        return this;
    }
    public withEnabled(enabled: boolean): Service {
        this['enabled'] = enabled;
        return this;
    }
}