

export class DeleteAddonInstanceRequest {
    private 'Content-Type'?: string;
    public id?: string;
    private 'cluster_id'?: string;
    public constructor(contentType?: string, id?: string) { 
        this['Content-Type'] = contentType;
        this['id'] = id;
    }
    public withContentType(contentType: string): DeleteAddonInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withId(id: string): DeleteAddonInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): DeleteAddonInstanceRequest {
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