import { BatchDeleteClusterTagsReq } from './BatchDeleteClusterTagsReq';


export class BatchDeleteClusterTagsRequest {
    private 'cluster_id'?: string;
    public body?: BatchDeleteClusterTagsReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchDeleteClusterTagsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: BatchDeleteClusterTagsReq): BatchDeleteClusterTagsRequest {
        this['body'] = body;
        return this;
    }
}