

export class ListGroupsForEnterpriseProjectRequest {
    private 'enterprise_project_id': string | undefined;
    public constructor(enterpriseProjectId?: any) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListGroupsForEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}