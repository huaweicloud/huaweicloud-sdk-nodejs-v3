

export class ListAutoSnapshotPolicyRequest {
    public id?: string;
    public name?: string;
    public tags?: string;
    private 'tag_key'?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withId(id: string): ListAutoSnapshotPolicyRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListAutoSnapshotPolicyRequest {
        this['name'] = name;
        return this;
    }
    public withTags(tags: string): ListAutoSnapshotPolicyRequest {
        this['tags'] = tags;
        return this;
    }
    public withTagKey(tagKey: string): ListAutoSnapshotPolicyRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAutoSnapshotPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListAutoSnapshotPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAutoSnapshotPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListAutoSnapshotPolicyRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListAutoSnapshotPolicyRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}