import { IPWhiteList } from './IPWhiteList';


export class UpdateAccessInfo {
    private 'access_type'?: string;
    private 'domain_name'?: string;
    private 'public_addresses_enable'?: boolean;
    private 'ip_whitelist'?: IPWhiteList;
    public constructor(accessType?: string) { 
        this['access_type'] = accessType;
    }
    public withAccessType(accessType: string): UpdateAccessInfo {
        this['access_type'] = accessType;
        return this;
    }
    public set accessType(accessType: string  | undefined) {
        this['access_type'] = accessType;
    }
    public get accessType(): string | undefined {
        return this['access_type'];
    }
    public withDomainName(domainName: string): UpdateAccessInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withPublicAddressesEnable(publicAddressesEnable: boolean): UpdateAccessInfo {
        this['public_addresses_enable'] = publicAddressesEnable;
        return this;
    }
    public set publicAddressesEnable(publicAddressesEnable: boolean  | undefined) {
        this['public_addresses_enable'] = publicAddressesEnable;
    }
    public get publicAddressesEnable(): boolean | undefined {
        return this['public_addresses_enable'];
    }
    public withIpWhitelist(ipWhitelist: IPWhiteList): UpdateAccessInfo {
        this['ip_whitelist'] = ipWhitelist;
        return this;
    }
    public set ipWhitelist(ipWhitelist: IPWhiteList  | undefined) {
        this['ip_whitelist'] = ipWhitelist;
    }
    public get ipWhitelist(): IPWhiteList | undefined {
        return this['ip_whitelist'];
    }
}