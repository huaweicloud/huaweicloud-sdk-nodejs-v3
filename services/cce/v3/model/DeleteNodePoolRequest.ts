

export class DeleteNodePoolRequest {
    private 'cluster_id': string | undefined;
    private 'nodepool_id': string | undefined;
    private 'Content-Type': string | undefined;
    public constructor(clusterId?: any, nodepoolId?: any, contentType?: any) { 
        this['cluster_id'] = clusterId;
        this['nodepool_id'] = nodepoolId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): DeleteNodePoolRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withNodepoolId(nodepoolId: string): DeleteNodePoolRequest {
        this['nodepool_id'] = nodepoolId;
        return this;
    }
    public set nodepoolId(nodepoolId: string | undefined) {
        this['nodepool_id'] = nodepoolId;
    }
    public get nodepoolId() {
        return this['nodepool_id'];
    }
    public withContentType(contentType: string): DeleteNodePoolRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}