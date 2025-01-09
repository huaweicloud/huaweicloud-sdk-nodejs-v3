import { TlsConfig } from './TlsConfig';


export class AdDomain {
    private 'domain_type'?: AdDomainDomainTypeEnum | string;
    private 'domain_name'?: string;
    private 'domain_admin_account'?: string;
    private 'domain_password'?: string;
    private 'active_domain_ip'?: string;
    private 'active_domain_name'?: string;
    private 'standby_domain_ip'?: string;
    private 'standby_domain_name'?: string;
    private 'active_dns_ip'?: string;
    private 'standby_dns_ip'?: string;
    private 'delete_computer_object'?: number;
    private 'use_ldaps'?: boolean;
    private 'tls_config'?: TlsConfig;
    public constructor(domainType?: string) { 
        this['domain_type'] = domainType;
    }
    public withDomainType(domainType: AdDomainDomainTypeEnum | string): AdDomain {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: AdDomainDomainTypeEnum | string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): AdDomainDomainTypeEnum | string | undefined {
        return this['domain_type'];
    }
    public withDomainName(domainName: string): AdDomain {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDomainAdminAccount(domainAdminAccount: string): AdDomain {
        this['domain_admin_account'] = domainAdminAccount;
        return this;
    }
    public set domainAdminAccount(domainAdminAccount: string  | undefined) {
        this['domain_admin_account'] = domainAdminAccount;
    }
    public get domainAdminAccount(): string | undefined {
        return this['domain_admin_account'];
    }
    public withDomainPassword(domainPassword: string): AdDomain {
        this['domain_password'] = domainPassword;
        return this;
    }
    public set domainPassword(domainPassword: string  | undefined) {
        this['domain_password'] = domainPassword;
    }
    public get domainPassword(): string | undefined {
        return this['domain_password'];
    }
    public withActiveDomainIp(activeDomainIp: string): AdDomain {
        this['active_domain_ip'] = activeDomainIp;
        return this;
    }
    public set activeDomainIp(activeDomainIp: string  | undefined) {
        this['active_domain_ip'] = activeDomainIp;
    }
    public get activeDomainIp(): string | undefined {
        return this['active_domain_ip'];
    }
    public withActiveDomainName(activeDomainName: string): AdDomain {
        this['active_domain_name'] = activeDomainName;
        return this;
    }
    public set activeDomainName(activeDomainName: string  | undefined) {
        this['active_domain_name'] = activeDomainName;
    }
    public get activeDomainName(): string | undefined {
        return this['active_domain_name'];
    }
    public withStandbyDomainIp(standbyDomainIp: string): AdDomain {
        this['standby_domain_ip'] = standbyDomainIp;
        return this;
    }
    public set standbyDomainIp(standbyDomainIp: string  | undefined) {
        this['standby_domain_ip'] = standbyDomainIp;
    }
    public get standbyDomainIp(): string | undefined {
        return this['standby_domain_ip'];
    }
    public withStandbyDomainName(standbyDomainName: string): AdDomain {
        this['standby_domain_name'] = standbyDomainName;
        return this;
    }
    public set standbyDomainName(standbyDomainName: string  | undefined) {
        this['standby_domain_name'] = standbyDomainName;
    }
    public get standbyDomainName(): string | undefined {
        return this['standby_domain_name'];
    }
    public withActiveDnsIp(activeDnsIp: string): AdDomain {
        this['active_dns_ip'] = activeDnsIp;
        return this;
    }
    public set activeDnsIp(activeDnsIp: string  | undefined) {
        this['active_dns_ip'] = activeDnsIp;
    }
    public get activeDnsIp(): string | undefined {
        return this['active_dns_ip'];
    }
    public withStandbyDnsIp(standbyDnsIp: string): AdDomain {
        this['standby_dns_ip'] = standbyDnsIp;
        return this;
    }
    public set standbyDnsIp(standbyDnsIp: string  | undefined) {
        this['standby_dns_ip'] = standbyDnsIp;
    }
    public get standbyDnsIp(): string | undefined {
        return this['standby_dns_ip'];
    }
    public withDeleteComputerObject(deleteComputerObject: number): AdDomain {
        this['delete_computer_object'] = deleteComputerObject;
        return this;
    }
    public set deleteComputerObject(deleteComputerObject: number  | undefined) {
        this['delete_computer_object'] = deleteComputerObject;
    }
    public get deleteComputerObject(): number | undefined {
        return this['delete_computer_object'];
    }
    public withUseLdaps(useLdaps: boolean): AdDomain {
        this['use_ldaps'] = useLdaps;
        return this;
    }
    public set useLdaps(useLdaps: boolean  | undefined) {
        this['use_ldaps'] = useLdaps;
    }
    public get useLdaps(): boolean | undefined {
        return this['use_ldaps'];
    }
    public withTlsConfig(tlsConfig: TlsConfig): AdDomain {
        this['tls_config'] = tlsConfig;
        return this;
    }
    public set tlsConfig(tlsConfig: TlsConfig  | undefined) {
        this['tls_config'] = tlsConfig;
    }
    public get tlsConfig(): TlsConfig | undefined {
        return this['tls_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AdDomainDomainTypeEnum {
    LITE_AS = 'LITE_AS',
    LOCAL_AD = 'LOCAL_AD'
}
