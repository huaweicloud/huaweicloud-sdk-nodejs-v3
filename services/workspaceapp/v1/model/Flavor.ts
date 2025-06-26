import { FlavorLink } from './FlavorLink';


export class Flavor {
    public id?: string;
    public links?: Array<FlavorLink>;
    public constructor() { 
    }
    public withId(id: string): Flavor {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<FlavorLink>): Flavor {
        this['links'] = links;
        return this;
    }
}