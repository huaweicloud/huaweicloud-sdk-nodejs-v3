import { ClusterCheckBody } from './ClusterCheckBody';


export class ClusterCheckRequestBody {
    public cluster?: ClusterCheckBody;
    public constructor(cluster?: ClusterCheckBody) { 
        this['cluster'] = cluster;
    }
    public withCluster(cluster: ClusterCheckBody): ClusterCheckRequestBody {
        this['cluster'] = cluster;
        return this;
    }
}