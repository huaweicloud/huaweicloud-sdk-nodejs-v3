import { BatchCreateResourceTags } from './BatchCreateResourceTags';


export class BatchCreateResourceTagRequest {
    private 'cluster_id': string | undefined;
    public body?: BatchCreateResourceTags;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): BatchCreateResourceTagRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: BatchCreateResourceTags): BatchCreateResourceTagRequest {
        this['body'] = body;
        return this;
    }
}