import { AccountBaseline } from './AccountBaseline';
import { OrganizationalUnitTypeForSetup } from './OrganizationalUnitTypeForSetup';


export class OrganizationStructureBaseLine {
    private 'organizational_unit_name'?: string;
    private 'organizational_unit_type'?: OrganizationalUnitTypeForSetup;
    public accounts?: Array<AccountBaseline>;
    public constructor(organizationalUnitType?: OrganizationalUnitTypeForSetup) { 
        this['organizational_unit_type'] = organizationalUnitType;
    }
    public withOrganizationalUnitName(organizationalUnitName: string): OrganizationStructureBaseLine {
        this['organizational_unit_name'] = organizationalUnitName;
        return this;
    }
    public set organizationalUnitName(organizationalUnitName: string  | undefined) {
        this['organizational_unit_name'] = organizationalUnitName;
    }
    public get organizationalUnitName(): string | undefined {
        return this['organizational_unit_name'];
    }
    public withOrganizationalUnitType(organizationalUnitType: OrganizationalUnitTypeForSetup): OrganizationStructureBaseLine {
        this['organizational_unit_type'] = organizationalUnitType;
        return this;
    }
    public set organizationalUnitType(organizationalUnitType: OrganizationalUnitTypeForSetup  | undefined) {
        this['organizational_unit_type'] = organizationalUnitType;
    }
    public get organizationalUnitType(): OrganizationalUnitTypeForSetup | undefined {
        return this['organizational_unit_type'];
    }
    public withAccounts(accounts: Array<AccountBaseline>): OrganizationStructureBaseLine {
        this['accounts'] = accounts;
        return this;
    }
}