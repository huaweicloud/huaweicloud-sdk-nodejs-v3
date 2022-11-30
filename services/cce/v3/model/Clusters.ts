import { ClusterCert } from './ClusterCert';


export class Clusters {
    public name?: string;
    public cluster?: ClusterCert;
    public constructor() { 
    }
    public withName(name: string): Clusters {
        this['name'] = name;
        return this;
    }
    public withCluster(cluster: ClusterCert): Clusters {
        this['cluster'] = cluster;
        return this;
    }
}