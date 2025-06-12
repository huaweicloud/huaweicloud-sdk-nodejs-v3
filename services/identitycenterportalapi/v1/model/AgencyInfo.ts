

export class AgencyInfo {
    private 'account_id'?: string;
    private 'agency_name'?: string;
    private 'permission_set_name'?: string;
    private 'agency_urn'?: string;
    public description?: string;
    public constructor() { 
    }
    public withAccountId(accountId: string): AgencyInfo {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAgencyName(agencyName: string): AgencyInfo {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withPermissionSetName(permissionSetName: string): AgencyInfo {
        this['permission_set_name'] = permissionSetName;
        return this;
    }
    public set permissionSetName(permissionSetName: string  | undefined) {
        this['permission_set_name'] = permissionSetName;
    }
    public get permissionSetName(): string | undefined {
        return this['permission_set_name'];
    }
    public withAgencyUrn(agencyUrn: string): AgencyInfo {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
    public withDescription(description: string): AgencyInfo {
        this['description'] = description;
        return this;
    }
}