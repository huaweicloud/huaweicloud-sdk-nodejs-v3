import { ClusterCert } from './ClusterCert';


export class Clusters {
    public cluster?: ClusterCert;
    public name?: string;
    public constructor() { 
    }
    public withCluster(cluster: ClusterCert): Clusters {
        this['cluster'] = cluster;
        return this;
    }
    public withName(name: string): Clusters {
        this['name'] = name;
        return this;
    }
}