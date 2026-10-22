

export class SnapshotGroupDetail {
    public id?: string;
    private 'project_id'?: string;
    private 'created_at'?: string;
    public status?: string;
    private 'updated_at'?: string;
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public tags?: { [key: string]: string; };
    private 'server_id'?: string;
    public constructor(id?: string, projectId?: string, createdAt?: string, status?: string, updatedAt?: string, name?: string, description?: string, enterpriseProjectId?: string, tags?: { [key: string]: string; }, serverId?: string) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['status'] = status;
        this['updated_at'] = updatedAt;
        this['name'] = name;
        this['description'] = description;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['tags'] = tags;
        this['server_id'] = serverId;
    }
    public withId(id: string): SnapshotGroupDetail {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): SnapshotGroupDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): SnapshotGroupDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withStatus(status: string): SnapshotGroupDetail {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: string): SnapshotGroupDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withName(name: string): SnapshotGroupDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SnapshotGroupDetail {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SnapshotGroupDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: { [key: string]: string; }): SnapshotGroupDetail {
        this['tags'] = tags;
        return this;
    }
    public withServerId(serverId: string): SnapshotGroupDetail {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
}