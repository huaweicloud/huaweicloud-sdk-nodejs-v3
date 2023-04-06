

export class Snapshot {
    public name: string;
    private 'cluster_id': string | undefined;
    public description?: string;
    public constructor(name?: any, clusterId?: any) { 
        this['name'] = name;
        this['cluster_id'] = clusterId;
    }
    public withName(name: string): Snapshot {
        this['name'] = name;
        return this;
    }
    public withClusterId(clusterId: string): Snapshot {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withDescription(description: string): Snapshot {
        this['description'] = description;
        return this;
    }
}