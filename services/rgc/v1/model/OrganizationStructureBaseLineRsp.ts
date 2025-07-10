import { AccountBaselineRsp } from './AccountBaselineRsp';
import { OrganizationalUnitTypeForSetup } from './OrganizationalUnitTypeForSetup';


export class OrganizationStructureBaseLineRsp {
    private 'organizational_unit_name'?: string;
    private 'organizational_unit_type'?: OrganizationalUnitTypeForSetup;
    public accounts?: Array<AccountBaselineRsp>;
    public constructor(organizationalUnitType?: OrganizationalUnitTypeForSetup) { 
        this['organizational_unit_type'] = organizationalUnitType;
    }
    public withOrganizationalUnitName(organizationalUnitName: string): OrganizationStructureBaseLineRsp {
        this['organizational_unit_name'] = organizationalUnitName;
        return this;
    }
    public set organizationalUnitName(organizationalUnitName: string  | undefined) {
        this['organizational_unit_name'] = organizationalUnitName;
    }
    public get organizationalUnitName(): string | undefined {
        return this['organizational_unit_name'];
    }
    public withOrganizationalUnitType(organizationalUnitType: OrganizationalUnitTypeForSetup): OrganizationStructureBaseLineRsp {
        this['organizational_unit_type'] = organizationalUnitType;
        return this;
    }
    public set organizationalUnitType(organizationalUnitType: OrganizationalUnitTypeForSetup  | undefined) {
        this['organizational_unit_type'] = organizationalUnitType;
    }
    public get organizationalUnitType(): OrganizationalUnitTypeForSetup | undefined {
        return this['organizational_unit_type'];
    }
    public withAccounts(accounts: Array<AccountBaselineRsp>): OrganizationStructureBaseLineRsp {
        this['accounts'] = accounts;
        return this;
    }
}