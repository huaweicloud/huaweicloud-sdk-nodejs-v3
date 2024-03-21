

export class ShowNodePoolConfigurationDetailsRequest {
    private 'cluster_id'?: string;
    private 'nodepool_id'?: string;
    private 'Content-Type'?: string;
    public constructor(clusterId?: string, nodepoolId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['nodepool_id'] = nodepoolId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): ShowNodePoolConfigurationDetailsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNodepoolId(nodepoolId: string): ShowNodePoolConfigurationDetailsRequest {
        this['nodepool_id'] = nodepoolId;
        return this;
    }
    public set nodepoolId(nodepoolId: string  | undefined) {
        this['nodepool_id'] = nodepoolId;
    }
    public get nodepoolId(): string | undefined {
        return this['nodepool_id'];
    }
    public withContentType(contentType: string): ShowNodePoolConfigurationDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}