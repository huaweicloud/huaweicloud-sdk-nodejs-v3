import { BatchCreateCn } from './BatchCreateCn';


export class BatchCreateClusterCnRequest {
    private 'cluster_id': string | undefined;
    public body?: BatchCreateCn;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchCreateClusterCnRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: BatchCreateCn): BatchCreateClusterCnRequest {
        this['body'] = body;
        return this;
    }
}