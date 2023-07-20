import { BatchCreateResourceTags } from './BatchCreateResourceTags';


export class BatchCreateResourceTagRequest {
    private 'cluster_id'?: string;
    public body?: BatchCreateResourceTags;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchCreateResourceTagRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: BatchCreateResourceTags): BatchCreateResourceTagRequest {
        this['body'] = body;
        return this;
    }
}