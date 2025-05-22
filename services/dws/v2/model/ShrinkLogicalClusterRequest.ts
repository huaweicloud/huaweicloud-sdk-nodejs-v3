import { ShrinkLogicalClusterRequestBody } from './ShrinkLogicalClusterRequestBody';


export class ShrinkLogicalClusterRequest {
    private 'cluster_id'?: string;
    private 'logical_cluster_id'?: string;
    public body?: ShrinkLogicalClusterRequestBody;
    public constructor(clusterId?: string, logicalClusterId?: string) { 
        this['cluster_id'] = clusterId;
        this['logical_cluster_id'] = logicalClusterId;
    }
    public withClusterId(clusterId: string): ShrinkLogicalClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withLogicalClusterId(logicalClusterId: string): ShrinkLogicalClusterRequest {
        this['logical_cluster_id'] = logicalClusterId;
        return this;
    }
    public set logicalClusterId(logicalClusterId: string  | undefined) {
        this['logical_cluster_id'] = logicalClusterId;
    }
    public get logicalClusterId(): string | undefined {
        return this['logical_cluster_id'];
    }
    public withBody(body: ShrinkLogicalClusterRequestBody): ShrinkLogicalClusterRequest {
        this['body'] = body;
        return this;
    }
}