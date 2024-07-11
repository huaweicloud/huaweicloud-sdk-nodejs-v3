

export class HostClusterRequest {
    public name?: string;
    public description?: string;
    private 'slave_cluster_id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): HostClusterRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): HostClusterRequest {
        this['description'] = description;
        return this;
    }
    public withSlaveClusterId(slaveClusterId: string): HostClusterRequest {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
}