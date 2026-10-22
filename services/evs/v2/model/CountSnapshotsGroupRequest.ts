

export class CountSnapshotsGroupRequest {
    public name?: string;
    public status?: string;
    public id?: string;
    private 'enterprise_project_id'?: string;
    private 'tag_key'?: string;
    public tags?: string;
    public constructor() { 
    }
    public withName(name: string): CountSnapshotsGroupRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CountSnapshotsGroupRequest {
        this['status'] = status;
        return this;
    }
    public withId(id: string): CountSnapshotsGroupRequest {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CountSnapshotsGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTagKey(tagKey: string): CountSnapshotsGroupRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withTags(tags: string): CountSnapshotsGroupRequest {
        this['tags'] = tags;
        return this;
    }
}