

export class CreateStandardSnapshot {
    private 'volume_id'?: string;
    public name?: string;
    public description?: string;
    public tags?: { [key: string]: string; };
    private 'enterprise_project_id'?: string;
    private 'instant_access'?: boolean;
    public incremental?: boolean;
    private 'retention_days'?: number;
    public constructor() { 
    }
    public withVolumeId(volumeId: string): CreateStandardSnapshot {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withName(name: string): CreateStandardSnapshot {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateStandardSnapshot {
        this['description'] = description;
        return this;
    }
    public withTags(tags: { [key: string]: string; }): CreateStandardSnapshot {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateStandardSnapshot {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withInstantAccess(instantAccess: boolean): CreateStandardSnapshot {
        this['instant_access'] = instantAccess;
        return this;
    }
    public set instantAccess(instantAccess: boolean  | undefined) {
        this['instant_access'] = instantAccess;
    }
    public get instantAccess(): boolean | undefined {
        return this['instant_access'];
    }
    public withIncremental(incremental: boolean): CreateStandardSnapshot {
        this['incremental'] = incremental;
        return this;
    }
    public withRetentionDays(retentionDays: number): CreateStandardSnapshot {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
}