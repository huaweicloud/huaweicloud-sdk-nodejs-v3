import { NovaLink } from './NovaLink';


export class NovaSimpleServer {
    public name?: string;
    public id?: string;
    public links?: Array<NovaLink>;
    public constructor(name?: string, id?: string, links?: Array<NovaLink>) { 
        this['name'] = name;
        this['id'] = id;
        this['links'] = links;
    }
    public withName(name: string): NovaSimpleServer {
        this['name'] = name;
        return this;
    }
    public withId(id: string): NovaSimpleServer {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<NovaLink>): NovaSimpleServer {
        this['links'] = links;
        return this;
    }
}