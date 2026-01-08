import { TlsConfig } from './TlsConfig';


export class AdInfo {
    private 'domain_type'?: AdInfoDomainTypeEnum | string;
    private 'domain_name'?: string;
    private 'domain_admin_account'?: string;
    private 'active_domain_name'?: string;
    private 'active_domain_ip'?: string;
    private 'standby_domain_name'?: string;
    private 'standby_domain_ip'?: string;
    private 'active_dns_ip'?: string;
    private 'standby_dns_ip'?: string;
    private 'delete_computer_object'?: string;
    private 'use_ldaps'?: boolean;
    private 'tls_config'?: TlsConfig;
    private 'cba_enabled'?: boolean;
    private 'certificate_id'?: string;
    public constructor() { 
    }
    public withDomainType(domainType: AdInfoDomainTypeEnum | string): AdInfo {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: AdInfoDomainTypeEnum | string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): AdInfoDomainTypeEnum | string | undefined {
        return this['domain_type'];
    }
    public withDomainName(domainName: string): AdInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDomainAdminAccount(domainAdminAccount: string): AdInfo {
        this['domain_admin_account'] = domainAdminAccount;
        return this;
    }
    public set domainAdminAccount(domainAdminAccount: string  | undefined) {
        this['domain_admin_account'] = domainAdminAccount;
    }
    public get domainAdminAccount(): string | undefined {
        return this['domain_admin_account'];
    }
    public withActiveDomainName(activeDomainName: string): AdInfo {
        this['active_domain_name'] = activeDomainName;
        return this;
    }
    public set activeDomainName(activeDomainName: string  | undefined) {
        this['active_domain_name'] = activeDomainName;
    }
    public get activeDomainName(): string | undefined {
        return this['active_domain_name'];
    }
    public withActiveDomainIp(activeDomainIp: string): AdInfo {
        this['active_domain_ip'] = activeDomainIp;
        return this;
    }
    public set activeDomainIp(activeDomainIp: string  | undefined) {
        this['active_domain_ip'] = activeDomainIp;
    }
    public get activeDomainIp(): string | undefined {
        return this['active_domain_ip'];
    }
    public withStandbyDomainName(standbyDomainName: string): AdInfo {
        this['standby_domain_name'] = standbyDomainName;
        return this;
    }
    public set standbyDomainName(standbyDomainName: string  | undefined) {
        this['standby_domain_name'] = standbyDomainName;
    }
    public get standbyDomainName(): string | undefined {
        return this['standby_domain_name'];
    }
    public withStandbyDomainIp(standbyDomainIp: string): AdInfo {
        this['standby_domain_ip'] = standbyDomainIp;
        return this;
    }
    public set standbyDomainIp(standbyDomainIp: string  | undefined) {
        this['standby_domain_ip'] = standbyDomainIp;
    }
    public get standbyDomainIp(): string | undefined {
        return this['standby_domain_ip'];
    }
    public withActiveDnsIp(activeDnsIp: string): AdInfo {
        this['active_dns_ip'] = activeDnsIp;
        return this;
    }
    public set activeDnsIp(activeDnsIp: string  | undefined) {
        this['active_dns_ip'] = activeDnsIp;
    }
    public get activeDnsIp(): string | undefined {
        return this['active_dns_ip'];
    }
    public withStandbyDnsIp(standbyDnsIp: string): AdInfo {
        this['standby_dns_ip'] = standbyDnsIp;
        return this;
    }
    public set standbyDnsIp(standbyDnsIp: string  | undefined) {
        this['standby_dns_ip'] = standbyDnsIp;
    }
    public get standbyDnsIp(): string | undefined {
        return this['standby_dns_ip'];
    }
    public withDeleteComputerObject(deleteComputerObject: string): AdInfo {
        this['delete_computer_object'] = deleteComputerObject;
        return this;
    }
    public set deleteComputerObject(deleteComputerObject: string  | undefined) {
        this['delete_computer_object'] = deleteComputerObject;
    }
    public get deleteComputerObject(): string | undefined {
        return this['delete_computer_object'];
    }
    public withUseLdaps(useLdaps: boolean): AdInfo {
        this['use_ldaps'] = useLdaps;
        return this;
    }
    public set useLdaps(useLdaps: boolean  | undefined) {
        this['use_ldaps'] = useLdaps;
    }
    public get useLdaps(): boolean | undefined {
        return this['use_ldaps'];
    }
    public withTlsConfig(tlsConfig: TlsConfig): AdInfo {
        this['tls_config'] = tlsConfig;
        return this;
    }
    public set tlsConfig(tlsConfig: TlsConfig  | undefined) {
        this['tls_config'] = tlsConfig;
    }
    public get tlsConfig(): TlsConfig | undefined {
        return this['tls_config'];
    }
    public withCbaEnabled(cbaEnabled: boolean): AdInfo {
        this['cba_enabled'] = cbaEnabled;
        return this;
    }
    public set cbaEnabled(cbaEnabled: boolean  | undefined) {
        this['cba_enabled'] = cbaEnabled;
    }
    public get cbaEnabled(): boolean | undefined {
        return this['cba_enabled'];
    }
    public withCertificateId(certificateId: string): AdInfo {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AdInfoDomainTypeEnum {
    LITE_AS = 'LITE_AS',
    LOCAL_AD = 'LOCAL_AD'
}
