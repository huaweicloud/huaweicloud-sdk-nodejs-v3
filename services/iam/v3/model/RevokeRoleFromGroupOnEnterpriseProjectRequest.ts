

export class RevokeRoleFromGroupOnEnterpriseProjectRequest {
    private 'enterprise_project_id': string | undefined;
    private 'group_id': string | undefined;
    private 'role_id': string | undefined;
    public constructor(enterpriseProjectId?: any, groupId?: any, roleId?: any) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['group_id'] = groupId;
        this['role_id'] = roleId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RevokeRoleFromGroupOnEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withGroupId(groupId: string): RevokeRoleFromGroupOnEnterpriseProjectRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withRoleId(roleId: string): RevokeRoleFromGroupOnEnterpriseProjectRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId() {
        return this['role_id'];
    }
}