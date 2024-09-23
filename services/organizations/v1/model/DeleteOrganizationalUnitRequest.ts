

export class DeleteOrganizationalUnitRequest {
    private 'X-Security-Token'?: string;
    private 'organizational_unit_id'?: string;
    public constructor(organizationalUnitId?: string) { 
        this['organizational_unit_id'] = organizationalUnitId;
    }
    public withXSecurityToken(xSecurityToken: string): DeleteOrganizationalUnitRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withOrganizationalUnitId(organizationalUnitId: string): DeleteOrganizationalUnitRequest {
        this['organizational_unit_id'] = organizationalUnitId;
        return this;
    }
    public set organizationalUnitId(organizationalUnitId: string  | undefined) {
        this['organizational_unit_id'] = organizationalUnitId;
    }
    public get organizationalUnitId(): string | undefined {
        return this['organizational_unit_id'];
    }
}