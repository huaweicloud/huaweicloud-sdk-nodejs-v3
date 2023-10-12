import { LinkResp } from './LinkResp';


export class CompatibleConfigurationResp {
    public id?: string;
    public name?: string;
    public links?: Array<LinkResp>;
    public constructor() { 
    }
    public withId(id: string): CompatibleConfigurationResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CompatibleConfigurationResp {
        this['name'] = name;
        return this;
    }
    public withLinks(links: Array<LinkResp>): CompatibleConfigurationResp {
        this['links'] = links;
        return this;
    }
}