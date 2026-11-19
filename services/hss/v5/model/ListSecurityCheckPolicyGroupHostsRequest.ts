

export class ListSecurityCheckPolicyGroupHostsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'group_id'?: string;
    public constructor(offset?: number, limit?: number, groupId?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['group_id'] = groupId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSecurityCheckPolicyGroupHostsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListSecurityCheckPolicyGroupHostsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSecurityCheckPolicyGroupHostsRequest {
        this['limit'] = limit;
        return this;
    }
    public withGroupId(groupId: string): ListSecurityCheckPolicyGroupHostsRequest {
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