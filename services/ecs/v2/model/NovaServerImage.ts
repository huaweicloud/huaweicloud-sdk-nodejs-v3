import { NovaLink } from './NovaLink';


export class NovaServerImage {
    public id: string;
    public links: Array<NovaLink>;
    public constructor(id?: any, links?: any) { 
        this['id'] = id;
        this['links'] = links;
    }
    public withId(id: string): NovaServerImage {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<NovaLink>): NovaServerImage {
        this['links'] = links;
        return this;
    }
}