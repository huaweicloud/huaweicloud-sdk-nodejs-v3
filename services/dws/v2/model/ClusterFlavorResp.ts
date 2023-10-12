import { LinkResp } from './LinkResp';


export class ClusterFlavorResp {
    public id?: string;
    public links?: Array<LinkResp>;
    public constructor() { 
    }
    public withId(id: string): ClusterFlavorResp {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<LinkResp>): ClusterFlavorResp {
        this['links'] = links;
        return this;
    }
}