

export class CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments {
    private 'agency_id': string | undefined;
    private 'enterprise_project_id': string | undefined;
    private 'role_id': string | undefined;
    public constructor(agencyId?: any, enterpriseProjectId?: any, roleId?: any) { 
        this['agency_id'] = agencyId;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['role_id'] = roleId;
    }
    public withAgencyId(agencyId: string): CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId() {
        return this['agency_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withRoleId(roleId: string): CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments {
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