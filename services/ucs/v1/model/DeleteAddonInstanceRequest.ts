

export class DeleteAddonInstanceRequest {
    public id?: string;
    private 'cluster_id'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
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