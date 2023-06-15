

export class ShowDatabaseUserRequest {
    private 'cluster_id': string | undefined;
    public name: string;
    public constructor(clusterId?: any, name?: any) { 
        this['cluster_id'] = clusterId;
        this['name'] = name;
    }
    public withClusterId(clusterId: string): ShowDatabaseUserRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withName(name: string): ShowDatabaseUserRequest {
        this['name'] = name;
        return this;
    }
}