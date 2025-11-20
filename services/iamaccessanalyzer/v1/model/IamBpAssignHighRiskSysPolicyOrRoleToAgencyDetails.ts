

export class IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails {
    private 'agency_id'?: string;
    private 'permission_name'?: string;
    public constructor(agencyId?: string, permissionName?: string) { 
        this['agency_id'] = agencyId;
        this['permission_name'] = permissionName;
    }
    public withAgencyId(agencyId: string): IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withPermissionName(permissionName: string): IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails {
        this['permission_name'] = permissionName;
        return this;
    }
    public set permissionName(permissionName: string  | undefined) {
        this['permission_name'] = permissionName;
    }
    public get permissionName(): string | undefined {
        return this['permission_name'];
    }
}