import { ClusterNameReq } from './ClusterNameReq';


export class ModifyClusterNameRequest {
    private 'cluster_id'?: string;
    public body?: ClusterNameReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ModifyClusterNameRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ClusterNameReq): ModifyClusterNameRequest {
        this['body'] = body;
        return this;
    }
}