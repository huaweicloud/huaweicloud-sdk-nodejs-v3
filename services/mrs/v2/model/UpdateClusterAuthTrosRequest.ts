import { ClusterAuthTros } from './ClusterAuthTros';


export class UpdateClusterAuthTrosRequest {
    private 'cluster_id'?: string;
    public body?: ClusterAuthTros;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateClusterAuthTrosRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ClusterAuthTros): UpdateClusterAuthTrosRequest {
        this['body'] = body;
        return this;
    }
}