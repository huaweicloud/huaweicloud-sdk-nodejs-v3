

export class AdDomainInfo {
    private 'domain_type'?: AdDomainInfoDomainTypeEnum | string;
    private 'domain_admin_account'?: string;
    private 'domain_password'?: string;
    public constructor(domainType?: string, domainAdminAccount?: string, domainPassword?: string) { 
        this['domain_type'] = domainType;
        this['domain_admin_account'] = domainAdminAccount;
        this['domain_password'] = domainPassword;
    }
    public withDomainType(domainType: AdDomainInfoDomainTypeEnum | string): AdDomainInfo {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: AdDomainInfoDomainTypeEnum | string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): AdDomainInfoDomainTypeEnum | string | undefined {
        return this['domain_type'];
    }
    public withDomainAdminAccount(domainAdminAccount: string): AdDomainInfo {
        this['domain_admin_account'] = domainAdminAccount;
        return this;
    }
    public set domainAdminAccount(domainAdminAccount: string  | undefined) {
        this['domain_admin_account'] = domainAdminAccount;
    }
    public get domainAdminAccount(): string | undefined {
        return this['domain_admin_account'];
    }
    public withDomainPassword(domainPassword: string): AdDomainInfo {
        this['domain_password'] = domainPassword;
        return this;
    }
    public set domainPassword(domainPassword: string  | undefined) {
        this['domain_password'] = domainPassword;
    }
    public get domainPassword(): string | undefined {
        return this['domain_password'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AdDomainInfoDomainTypeEnum {
    LITE_AS = 'LITE_AS',
    LOCAL_AD = 'LOCAL_AD'
}
