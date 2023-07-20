

export class AssociateAgencyWithProjectPermissionRequest {
    private 'agency_id'?: string;
    private 'role_id'?: string;
    public constructor(agencyId?: string, roleId?: string) { 
        this['agency_id'] = agencyId;
        this['role_id'] = roleId;
    }
    public withAgencyId(agencyId: string): AssociateAgencyWithProjectPermissionRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withRoleId(roleId: string): AssociateAgencyWithProjectPermissionRequest {
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