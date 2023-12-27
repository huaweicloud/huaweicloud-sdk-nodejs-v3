

export class ListArtifactoryStorageStatisticRequest {
    private 'tenant_id'?: string;
    public repo?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'instance_id'?: string;
    public constructor(tenantId?: string) { 
        this['tenant_id'] = tenantId;
    }
    public withTenantId(tenantId: string): ListArtifactoryStorageStatisticRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withRepo(repo: string): ListArtifactoryStorageStatisticRequest {
        this['repo'] = repo;
        return this;
    }
    public withStartTime(startTime: string): ListArtifactoryStorageStatisticRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListArtifactoryStorageStatisticRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withInstanceId(instanceId: string): ListArtifactoryStorageStatisticRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}