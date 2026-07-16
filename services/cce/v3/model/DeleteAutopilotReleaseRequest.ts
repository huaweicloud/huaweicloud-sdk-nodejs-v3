

export class DeleteAutopilotReleaseRequest {
    public name?: string;
    public namespace?: string;
    private 'show_resources'?: string;
    private 'Content-Type'?: string;
    private 'cluster_id'?: string;
    public constructor(name?: string, namespace?: string, contentType?: string, clusterId?: string) { 
        this['name'] = name;
        this['namespace'] = namespace;
        this['Content-Type'] = contentType;
        this['cluster_id'] = clusterId;
    }
    public withName(name: string): DeleteAutopilotReleaseRequest {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): DeleteAutopilotReleaseRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withShowResources(showResources: string): DeleteAutopilotReleaseRequest {
        this['show_resources'] = showResources;
        return this;
    }
    public set showResources(showResources: string  | undefined) {
        this['show_resources'] = showResources;
    }
    public get showResources(): string | undefined {
        return this['show_resources'];
    }
    public withContentType(contentType: string): DeleteAutopilotReleaseRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withClusterId(clusterId: string): DeleteAutopilotReleaseRequest {
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