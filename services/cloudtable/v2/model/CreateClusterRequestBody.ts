import { Cluster } from './Cluster';


export class CreateClusterRequestBody {
    public cluster?: Cluster;
    public constructor(cluster?: Cluster) { 
        this['cluster'] = cluster;
    }
    public withCluster(cluster: Cluster): CreateClusterRequestBody {
        this['cluster'] = cluster;
        return this;
    }
}