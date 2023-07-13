import { BatchCreateClusterTagsReq } from './BatchCreateClusterTagsReq';


export class BatchCreateClusterTagsRequest {
    private 'cluster_id': string | undefined;
    public body?: BatchCreateClusterTagsReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchCreateClusterTagsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: BatchCreateClusterTagsReq): BatchCreateClusterTagsRequest {
        this['body'] = body;
        return this;
    }
}