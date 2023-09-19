import { BatchAddOrDeleteTagOnClusterReq } from './BatchAddOrDeleteTagOnClusterReq';


export class UpdateBatchClustersTagsRequest {
    private 'cluster_id'?: string;
    private 'resource_type'?: string;
    public body?: BatchAddOrDeleteTagOnClusterReq;
    public constructor(clusterId?: string, resourceType?: string) { 
        this['cluster_id'] = clusterId;
        this['resource_type'] = resourceType;
    }
    public withClusterId(clusterId: string): UpdateBatchClustersTagsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withResourceType(resourceType: string): UpdateBatchClustersTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withBody(body: BatchAddOrDeleteTagOnClusterReq): UpdateBatchClustersTagsRequest {
        this['body'] = body;
        return this;
    }
}