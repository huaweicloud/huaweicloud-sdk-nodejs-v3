import { ClusterShrinkReq } from './ClusterShrinkReq';


export class ShrinkClusterRequest {
    private 'cluster_id': string | undefined;
    public body?: ClusterShrinkReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ShrinkClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: ClusterShrinkReq): ShrinkClusterRequest {
        this['body'] = body;
        return this;
    }
}