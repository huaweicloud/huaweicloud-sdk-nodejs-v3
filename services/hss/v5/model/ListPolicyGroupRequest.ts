

export class ListPolicyGroupRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'group_name'?: string;
    private 'container_mode'?: boolean;
    private 'group_id'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPolicyGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListPolicyGroupRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPolicyGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withGroupName(groupName: string): ListPolicyGroupRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withContainerMode(containerMode: boolean): ListPolicyGroupRequest {
        this['container_mode'] = containerMode;
        return this;
    }
    public set containerMode(containerMode: boolean  | undefined) {
        this['container_mode'] = containerMode;
    }
    public get containerMode(): boolean | undefined {
        return this['container_mode'];
    }
    public withGroupId(groupId: string): ListPolicyGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}