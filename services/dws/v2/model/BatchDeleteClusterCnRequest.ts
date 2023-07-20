import { BatchDeleteCn } from './BatchDeleteCn';


export class BatchDeleteClusterCnRequest {
    private 'cluster_id'?: string;
    public body?: BatchDeleteCn;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchDeleteClusterCnRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: BatchDeleteCn): BatchDeleteClusterCnRequest {
        this['body'] = body;
        return this;
    }
}