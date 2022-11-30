

export class AssociateRoleToUserOnEnterpriseProjectRequest {
    private 'enterprise_project_id': string | undefined;
    private 'user_id': string | undefined;
    private 'role_id': string | undefined;
    public constructor(enterpriseProjectId?: any, userId?: any, roleId?: any) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['user_id'] = userId;
        this['role_id'] = roleId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AssociateRoleToUserOnEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withUserId(userId: string): AssociateRoleToUserOnEnterpriseProjectRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withRoleId(roleId: string): AssociateRoleToUserOnEnterpriseProjectRequest {
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