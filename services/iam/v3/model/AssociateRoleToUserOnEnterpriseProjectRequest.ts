

export class AssociateRoleToUserOnEnterpriseProjectRequest {
    private 'enterprise_project_id'?: string;
    private 'user_id'?: string;
    private 'role_id'?: string;
    public constructor(enterpriseProjectId?: string, userId?: string, roleId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['user_id'] = userId;
        this['role_id'] = roleId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AssociateRoleToUserOnEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withUserId(userId: string): AssociateRoleToUserOnEnterpriseProjectRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withRoleId(roleId: string): AssociateRoleToUserOnEnterpriseProjectRequest {
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