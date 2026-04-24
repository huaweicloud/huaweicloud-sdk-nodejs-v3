

export class CheckProjectPermissionForAgencyRequest {
    private 'project_id'?: string;
    private 'agency_id'?: string;
    private 'role_id'?: string;
    public constructor(projectId?: string, agencyId?: string, roleId?: string) { 
        this['project_id'] = projectId;
        this['agency_id'] = agencyId;
        this['role_id'] = roleId;
    }
    public withProjectId(projectId: string): CheckProjectPermissionForAgencyRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAgencyId(agencyId: string): CheckProjectPermissionForAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withRoleId(roleId: string): CheckProjectPermissionForAgencyRequest {
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