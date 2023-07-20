import { ResizeClusterRequestBody } from './ResizeClusterRequestBody';


export class ResizeClusterRequest {
    private 'cluster_id'?: string;
    public body?: ResizeClusterRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ResizeClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ResizeClusterRequestBody): ResizeClusterRequest {
        this['body'] = body;
        return this;
    }
}