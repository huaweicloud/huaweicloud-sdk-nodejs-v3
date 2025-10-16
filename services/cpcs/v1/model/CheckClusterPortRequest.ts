

export class CheckClusterPortRequest {
    private 'cluster_id'?: string;
    public id?: string;
    public constructor(clusterId?: string, id?: string) { 
        this['cluster_id'] = clusterId;
        this['id'] = id;
    }
    public withClusterId(clusterId: string): CheckClusterPortRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withId(id: string): CheckClusterPortRequest {
        this['id'] = id;
        return this;
    }
}