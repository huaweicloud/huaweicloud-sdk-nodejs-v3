

export class ValidateDcRequestBody {
    public domain?: string;
    private 'dc_ip'?: string;
    private 'dc_name'?: string;
    private 'domain_admin_account'?: string;
    private 'domain_password'?: string;
    private 'is_ldaps_enable'?: boolean;
    private 'ldaps_certificate'?: string;
    public constructor(domain?: string, dcIp?: string, dcName?: string) { 
        this['domain'] = domain;
        this['dc_ip'] = dcIp;
        this['dc_name'] = dcName;
    }
    public withDomain(domain: string): ValidateDcRequestBody {
        this['domain'] = domain;
        return this;
    }
    public withDcIp(dcIp: string): ValidateDcRequestBody {
        this['dc_ip'] = dcIp;
        return this;
    }
    public set dcIp(dcIp: string  | undefined) {
        this['dc_ip'] = dcIp;
    }
    public get dcIp(): string | undefined {
        return this['dc_ip'];
    }
    public withDcName(dcName: string): ValidateDcRequestBody {
        this['dc_name'] = dcName;
        return this;
    }
    public set dcName(dcName: string  | undefined) {
        this['dc_name'] = dcName;
    }
    public get dcName(): string | undefined {
        return this['dc_name'];
    }
    public withDomainAdminAccount(domainAdminAccount: string): ValidateDcRequestBody {
        this['domain_admin_account'] = domainAdminAccount;
        return this;
    }
    public set domainAdminAccount(domainAdminAccount: string  | undefined) {
        this['domain_admin_account'] = domainAdminAccount;
    }
    public get domainAdminAccount(): string | undefined {
        return this['domain_admin_account'];
    }
    public withDomainPassword(domainPassword: string): ValidateDcRequestBody {
        this['domain_password'] = domainPassword;
        return this;
    }
    public set domainPassword(domainPassword: string  | undefined) {
        this['domain_password'] = domainPassword;
    }
    public get domainPassword(): string | undefined {
        return this['domain_password'];
    }
    public withIsLdapsEnable(isLdapsEnable: boolean): ValidateDcRequestBody {
        this['is_ldaps_enable'] = isLdapsEnable;
        return this;
    }
    public set isLdapsEnable(isLdapsEnable: boolean  | undefined) {
        this['is_ldaps_enable'] = isLdapsEnable;
    }
    public get isLdapsEnable(): boolean | undefined {
        return this['is_ldaps_enable'];
    }
    public withLdapsCertificate(ldapsCertificate: string): ValidateDcRequestBody {
        this['ldaps_certificate'] = ldapsCertificate;
        return this;
    }
    public set ldapsCertificate(ldapsCertificate: string  | undefined) {
        this['ldaps_certificate'] = ldapsCertificate;
    }
    public get ldapsCertificate(): string | undefined {
        return this['ldaps_certificate'];
    }
}