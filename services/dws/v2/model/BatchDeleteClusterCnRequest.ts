import { BatchDeleteCn } from './BatchDeleteCn';


export class BatchDeleteClusterCnRequest {
    private 'cluster_id': string | undefined;
    public body?: BatchDeleteCn;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchDeleteClusterCnRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: BatchDeleteCn): BatchDeleteClusterCnRequest {
        this['body'] = body;
        return this;
    }
}