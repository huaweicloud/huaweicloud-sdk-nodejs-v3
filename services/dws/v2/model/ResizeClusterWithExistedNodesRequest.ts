import { ResizeClusterWithExistedNodesRequestBody } from './ResizeClusterWithExistedNodesRequestBody';


export class ResizeClusterWithExistedNodesRequest {
    private 'cluster_id'?: string;
    public body?: ResizeClusterWithExistedNodesRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ResizeClusterWithExistedNodesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ResizeClusterWithExistedNodesRequestBody): ResizeClusterWithExistedNodesRequest {
        this['body'] = body;
        return this;
    }
}