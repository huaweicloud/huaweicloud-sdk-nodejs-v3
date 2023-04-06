import { V2CreateCluster } from './V2CreateCluster';


export class V2CreateClusterReq {
    public cluster?: V2CreateCluster;
    public constructor() { 
    }
    public withCluster(cluster: V2CreateCluster): V2CreateClusterReq {
        this['cluster'] = cluster;
        return this;
    }
}