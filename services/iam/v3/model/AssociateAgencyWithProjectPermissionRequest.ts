

export class AssociateAgencyWithProjectPermissionRequest {
    private 'agency_id': string | undefined;
    private 'role_id': string | undefined;
    public constructor(agencyId: any, roleId: any) { 
        this['agency_id'] = agencyId;
        this['role_id'] = roleId;
    }
    public withAgencyId(agencyId: string): AssociateAgencyWithProjectPermissionRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId() {
        return this['agency_id'];
    }
    public withRoleId(roleId: string): AssociateAgencyWithProjectPermissionRequest {
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