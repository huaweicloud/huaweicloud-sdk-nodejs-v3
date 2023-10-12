import { LinkResp } from './LinkResp';


export class CompatibleReplicasResp {
    public id?: string;
    public name?: string;
    public links?: Array<LinkResp>;
    public constructor() { 
    }
    public withId(id: string): CompatibleReplicasResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CompatibleReplicasResp {
        this['name'] = name;
        return this;
    }
    public withLinks(links: Array<LinkResp>): CompatibleReplicasResp {
        this['links'] = links;
        return this;
    }
}