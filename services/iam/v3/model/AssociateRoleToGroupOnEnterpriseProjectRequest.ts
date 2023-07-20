

export class AssociateRoleToGroupOnEnterpriseProjectRequest {
    private 'enterprise_project_id'?: string;
    private 'group_id'?: string;
    private 'role_id'?: string;
    public constructor(enterpriseProjectId?: string, groupId?: string, roleId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['group_id'] = groupId;
        this['role_id'] = roleId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AssociateRoleToGroupOnEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGroupId(groupId: string): AssociateRoleToGroupOnEnterpriseProjectRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withRoleId(roleId: string): AssociateRoleToGroupOnEnterpriseProjectRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
}