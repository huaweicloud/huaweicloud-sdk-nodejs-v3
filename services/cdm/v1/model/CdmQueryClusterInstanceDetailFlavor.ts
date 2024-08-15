import { ClusterLinks } from './ClusterLinks';


export class CdmQueryClusterInstanceDetailFlavor {
    public id?: string;
    public links?: Array<ClusterLinks>;
    public constructor() { 
    }
    public withId(id: string): CdmQueryClusterInstanceDetailFlavor {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<ClusterLinks>): CdmQueryClusterInstanceDetailFlavor {
        this['links'] = links;
        return this;
    }
}