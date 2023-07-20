import { Link } from './Link';


export class SimpleFlavor {
    public id?: string;
    public links?: Array<Link>;
    public constructor(id?: string, links?: Array<Link>) { 
        this['id'] = id;
        this['links'] = links;
    }
    public withId(id: string): SimpleFlavor {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): SimpleFlavor {
        this['links'] = links;
        return this;
    }
}