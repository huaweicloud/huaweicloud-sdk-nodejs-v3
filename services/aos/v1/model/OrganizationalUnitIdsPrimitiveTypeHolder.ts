

export class OrganizationalUnitIdsPrimitiveTypeHolder {
    private 'organizational_unit_ids'?: Array<string>;
    public constructor() { 
    }
    public withOrganizationalUnitIds(organizationalUnitIds: Array<string>): OrganizationalUnitIdsPrimitiveTypeHolder {
        this['organizational_unit_ids'] = organizationalUnitIds;
        return this;
    }
    public set organizationalUnitIds(organizationalUnitIds: Array<string>  | undefined) {
        this['organizational_unit_ids'] = organizationalUnitIds;
    }
    public get organizationalUnitIds(): Array<string> | undefined {
        return this['organizational_unit_ids'];
    }
}