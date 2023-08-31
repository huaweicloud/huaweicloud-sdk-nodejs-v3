import { BatchDeleteClusterTagsRequestBody } from './BatchDeleteClusterTagsRequestBody';


export class BatchDeleteClusterTagsRequest {
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    public body?: BatchDeleteClusterTagsRequestBody;
    public constructor(clusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
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
    public withContentType(contentType: string): BatchDeleteClusterTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchDeleteClusterTagsRequestBody): BatchDeleteClusterTagsRequest {
        this['body'] = body;
        return this;
    }
}