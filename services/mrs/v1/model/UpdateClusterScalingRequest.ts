import { ClusterScalingReq } from './ClusterScalingReq';


export class UpdateClusterScalingRequest {
    private 'cluster_id'?: string;
    public body?: ClusterScalingReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateClusterScalingRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ClusterScalingReq): UpdateClusterScalingRequest {
        this['body'] = body;
        return this;
    }
}