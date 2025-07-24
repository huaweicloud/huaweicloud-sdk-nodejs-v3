

export class AddActiveDirectoryDomainRequestBody {
    private 'service_account'?: string;
    public password?: string;
    private 'domain_name'?: string;
    private 'system_name'?: string;
    private 'overwrite_same_account'?: boolean;
    private 'dns_server'?: Array<string>;
    private 'organization_unit'?: string;
    private 'vpc_id'?: string;
    public constructor(serviceAccount?: string, password?: string, domainName?: string, systemName?: string, dnsServer?: Array<string>) { 
        this['service_account'] = serviceAccount;
        this['password'] = password;
        this['domain_name'] = domainName;
        this['system_name'] = systemName;
        this['dns_server'] = dnsServer;
    }
    public withServiceAccount(serviceAccount: string): AddActiveDirectoryDomainRequestBody {
        this['service_account'] = serviceAccount;
        return this;
    }
    public set serviceAccount(serviceAccount: string  | undefined) {
        this['service_account'] = serviceAccount;
    }
    public get serviceAccount(): string | undefined {
        return this['service_account'];
    }
    public withPassword(password: string): AddActiveDirectoryDomainRequestBody {
        this['password'] = password;
        return this;
    }
    public withDomainName(domainName: string): AddActiveDirectoryDomainRequestBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withSystemName(systemName: string): AddActiveDirectoryDomainRequestBody {
        this['system_name'] = systemName;
        return this;
    }
    public set systemName(systemName: string  | undefined) {
        this['system_name'] = systemName;
    }
    public get systemName(): string | undefined {
        return this['system_name'];
    }
    public withOverwriteSameAccount(overwriteSameAccount: boolean): AddActiveDirectoryDomainRequestBody {
        this['overwrite_same_account'] = overwriteSameAccount;
        return this;
    }
    public set overwriteSameAccount(overwriteSameAccount: boolean  | undefined) {
        this['overwrite_same_account'] = overwriteSameAccount;
    }
    public get overwriteSameAccount(): boolean | undefined {
        return this['overwrite_same_account'];
    }
    public withDnsServer(dnsServer: Array<string>): AddActiveDirectoryDomainRequestBody {
        this['dns_server'] = dnsServer;
        return this;
    }
    public set dnsServer(dnsServer: Array<string>  | undefined) {
        this['dns_server'] = dnsServer;
    }
    public get dnsServer(): Array<string> | undefined {
        return this['dns_server'];
    }
    public withOrganizationUnit(organizationUnit: string): AddActiveDirectoryDomainRequestBody {
        this['organization_unit'] = organizationUnit;
        return this;
    }
    public set organizationUnit(organizationUnit: string  | undefined) {
        this['organization_unit'] = organizationUnit;
    }
    public get organizationUnit(): string | undefined {
        return this['organization_unit'];
    }
    public withVpcId(vpcId: string): AddActiveDirectoryDomainRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}