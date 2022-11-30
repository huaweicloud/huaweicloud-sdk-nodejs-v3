

export class ListRolesForUserOnEnterpriseProjectRequest {
    private 'enterprise_project_id': string | undefined;
    private 'user_id': string | undefined;
    public constructor(enterpriseProjectId?: any, userId?: any) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['user_id'] = userId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRolesForUserOnEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withUserId(userId: string): ListRolesForUserOnEnterpriseProjectRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
}