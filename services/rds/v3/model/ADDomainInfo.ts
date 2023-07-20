

export class ADDomainInfo {
    private 'domain_admin_account_name'?: string;
    private 'domain_admin_pwd'?: string;
    public constructor(domainAdminAccountName?: string, domainAdminPwd?: string) { 
        this['domain_admin_account_name'] = domainAdminAccountName;
        this['domain_admin_pwd'] = domainAdminPwd;
    }
    public withDomainAdminAccountName(domainAdminAccountName: string): ADDomainInfo {
        this['domain_admin_account_name'] = domainAdminAccountName;
        return this;
    }
    public set domainAdminAccountName(domainAdminAccountName: string  | undefined) {
        this['domain_admin_account_name'] = domainAdminAccountName;
    }
    public get domainAdminAccountName(): string | undefined {
        return this['domain_admin_account_name'];
    }
    public withDomainAdminPwd(domainAdminPwd: string): ADDomainInfo {
        this['domain_admin_pwd'] = domainAdminPwd;
        return this;
    }
    public set domainAdminPwd(domainAdminPwd: string  | undefined) {
        this['domain_admin_pwd'] = domainAdminPwd;
    }
    public get domainAdminPwd(): string | undefined {
        return this['domain_admin_pwd'];
    }
}