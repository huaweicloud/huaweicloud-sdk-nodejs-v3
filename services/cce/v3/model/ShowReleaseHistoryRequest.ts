

export class ShowReleaseHistoryRequest {
    public name?: string;
    public namespace?: string;
    private 'Content-Type'?: string;
    private 'cluster_id'?: string;
    public constructor(name?: string, namespace?: string, contentType?: string, clusterId?: string) { 
        this['name'] = name;
        this['namespace'] = namespace;
        this['Content-Type'] = contentType;
        this['cluster_id'] = clusterId;
    }
    public withName(name: string): ShowReleaseHistoryRequest {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): ShowReleaseHistoryRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withContentType(contentType: string): ShowReleaseHistoryRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withClusterId(clusterId: string): ShowReleaseHistoryRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}