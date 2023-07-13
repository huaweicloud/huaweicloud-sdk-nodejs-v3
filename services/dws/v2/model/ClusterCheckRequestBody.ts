import { ClusterCheckBody } from './ClusterCheckBody';


export class ClusterCheckRequestBody {
    public cluster: ClusterCheckBody;
    public constructor(cluster?: any) { 
        this['cluster'] = cluster;
    }
    public withCluster(cluster: ClusterCheckBody): ClusterCheckRequestBody {
        this['cluster'] = cluster;
        return this;
    }
}