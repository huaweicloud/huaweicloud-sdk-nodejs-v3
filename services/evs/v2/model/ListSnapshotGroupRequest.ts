

export class ListSnapshotGroupRequest {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'tag_key'?: string;
    public tags?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'server_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ListSnapshotGroupRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListSnapshotGroupRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListSnapshotGroupRequest {
        this['status'] = status;
        return this;
    }
    public withTagKey(tagKey: string): ListSnapshotGroupRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withTags(tags: string): ListSnapshotGroupRequest {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSnapshotGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListSnapshotGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSnapshotGroupRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListSnapshotGroupRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListSnapshotGroupRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withServerId(serverId: string): ListSnapshotGroupRequest {
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