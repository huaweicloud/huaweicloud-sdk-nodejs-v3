

export class SnapshotGroup {
    private 'server_id'?: string;
    private 'volume_ids'?: Array<string>;
    private 'instant_access'?: boolean;
    public name?: string;
    public description?: string;
    public tags?: { [key: string]: string; };
    private 'enterprise_project_id'?: string;
    public incremental?: boolean;
    public constructor() { 
    }
    public withServerId(serverId: string): SnapshotGroup {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withVolumeIds(volumeIds: Array<string>): SnapshotGroup {
        this['volume_ids'] = volumeIds;
        return this;
    }
    public set volumeIds(volumeIds: Array<string>  | undefined) {
        this['volume_ids'] = volumeIds;
    }
    public get volumeIds(): Array<string> | undefined {
        return this['volume_ids'];
    }
    public withInstantAccess(instantAccess: boolean): SnapshotGroup {
        this['instant_access'] = instantAccess;
        return this;
    }
    public set instantAccess(instantAccess: boolean  | undefined) {
        this['instant_access'] = instantAccess;
    }
    public get instantAccess(): boolean | undefined {
        return this['instant_access'];
    }
    public withName(name: string): SnapshotGroup {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SnapshotGroup {
        this['description'] = description;
        return this;
    }
    public withTags(tags: { [key: string]: string; }): SnapshotGroup {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SnapshotGroup {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIncremental(incremental: boolean): SnapshotGroup {
        this['incremental'] = incremental;
        return this;
    }
}