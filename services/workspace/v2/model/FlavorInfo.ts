import { FlavorLinkInfo } from './FlavorLinkInfo';


export class FlavorInfo {
    public id?: string;
    public links?: Array<FlavorLinkInfo>;
    public constructor() { 
    }
    public withId(id: string): FlavorInfo {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<FlavorLinkInfo>): FlavorInfo {
        this['links'] = links;
        return this;
    }
}