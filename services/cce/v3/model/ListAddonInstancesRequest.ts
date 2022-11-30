

export class ListAddonInstancesRequest {
    private 'Content-Type': string | undefined;
    private 'cluster_id': string | undefined;
    public constructor(contentType?: any, clusterId?: any) { 
        this['Content-Type'] = contentType;
        this['cluster_id'] = clusterId;
    }
    public withContentType(contentType: string): ListAddonInstancesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withClusterId(clusterId: string): ListAddonInstancesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
}