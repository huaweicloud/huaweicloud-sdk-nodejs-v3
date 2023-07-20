import { BatchCreateCn } from './BatchCreateCn';


export class BatchCreateClusterCnRequest {
    private 'cluster_id'?: string;
    public body?: BatchCreateCn;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchCreateClusterCnRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: BatchCreateCn): BatchCreateClusterCnRequest {
        this['body'] = body;
        return this;
    }
}