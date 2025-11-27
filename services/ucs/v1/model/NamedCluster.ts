import { ClusterCert } from './ClusterCert';


export class NamedCluster {
    public name?: string;
    public cluster?: ClusterCert;
    public constructor() { 
    }
    public withName(name: string): NamedCluster {
        this['name'] = name;
        return this;
    }
    public withCluster(cluster: ClusterCert): NamedCluster {
        this['cluster'] = cluster;
        return this;
    }
}