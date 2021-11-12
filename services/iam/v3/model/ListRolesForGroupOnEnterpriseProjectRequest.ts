

export class ListRolesForGroupOnEnterpriseProjectRequest {
    private 'enterprise_project_id': string | undefined;
    private 'group_id': string | undefined;
    public constructor(enterpriseProjectId?: any, groupId?: any) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['group_id'] = groupId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRolesForGroupOnEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withGroupId(groupId: string): ListRolesForGroupOnEnterpriseProjectRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
}