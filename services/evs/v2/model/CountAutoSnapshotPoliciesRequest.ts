

export class CountAutoSnapshotPoliciesRequest {
    public id?: string;
    public name?: string;
    private 'tag_key'?: string;
    public tags?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): CountAutoSnapshotPoliciesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CountAutoSnapshotPoliciesRequest {
        this['name'] = name;
        return this;
    }
    public withTagKey(tagKey: string): CountAutoSnapshotPoliciesRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withTags(tags: string): CountAutoSnapshotPoliciesRequest {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CountAutoSnapshotPoliciesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}