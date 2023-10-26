import { ClusterLinks } from './ClusterLinks';


export class ClusterDetailInstanceFlavor {
    public id?: string;
    public links?: Array<ClusterLinks>;
    public constructor() { 
    }
    public withId(id: string): ClusterDetailInstanceFlavor {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<ClusterLinks>): ClusterDetailInstanceFlavor {
        this['links'] = links;
        return this;
    }
}