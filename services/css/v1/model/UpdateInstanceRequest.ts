

export class UpdateInstanceRequest {
    private 'cluster_id'?: string;
    private 'instance_id'?: string;
    public migrateData?: string;
    public agency?: string;
    public constructor(clusterId?: string, instanceId?: string) { 
        this['cluster_id'] = clusterId;
        this['instance_id'] = instanceId;
    }
    public withClusterId(clusterId: string): UpdateInstanceRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withInstanceId(instanceId: string): UpdateInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMigrateData(migrateData: string): UpdateInstanceRequest {
        this['migrateData'] = migrateData;
        return this;
    }
    public withAgency(agency: string): UpdateInstanceRequest {
        this['agency'] = agency;
        return this;
    }
}