

export class Snapshot {
    public name?: string;
    private 'cluster_id'?: string;
    public description?: string;
    public constructor(name?: string, clusterId?: string) { 
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
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDescription(description: string): Snapshot {
        this['description'] = description;
        return this;
    }
}