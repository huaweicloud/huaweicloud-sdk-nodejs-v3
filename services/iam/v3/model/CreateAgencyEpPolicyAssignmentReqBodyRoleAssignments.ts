

export class CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments {
    private 'agency_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'role_id'?: string;
    public constructor(agencyId?: string, enterpriseProjectId?: string, roleId?: string) { 
        this['agency_id'] = agencyId;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['role_id'] = roleId;
    }
    public withAgencyId(agencyId: string): CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRoleId(roleId: string): CreateAgencyEpPolicyAssignmentReqBodyRoleAssignments {
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