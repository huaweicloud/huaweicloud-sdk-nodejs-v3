import { Links } from './Links';


export class FlavorInfo {
    public id?: string;
    public links?: Array<Links>;
    public constructor() { 
    }
    public withId(id: string): FlavorInfo {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Links>): FlavorInfo {
        this['links'] = links;
        return this;
    }
}