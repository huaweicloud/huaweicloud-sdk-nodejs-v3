import { BatchDeleteResourceTags } from './BatchDeleteResourceTags';


export class BatchDeleteResourceTagRequest {
    private 'cluster_id'?: string;
    public body?: BatchDeleteResourceTags;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchDeleteResourceTagRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: BatchDeleteResourceTags): BatchDeleteResourceTagRequest {
        this['body'] = body;
        return this;
    }
}