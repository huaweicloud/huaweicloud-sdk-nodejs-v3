

export class RegisterOrganizationalUnitRequest {
    private 'organizational_unit_id'?: string;
    public constructor(organizationalUnitId?: string) { 
        this['organizational_unit_id'] = organizationalUnitId;
    }
    public withOrganizationalUnitId(organizationalUnitId: string): RegisterOrganizationalUnitRequest {
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