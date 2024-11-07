import { SiteNetworkQuotaKeyEnum } from './SiteNetworkQuotaKeyEnum';


export class SiteNetworkQuotaKey {
    private 'quota_key'?: SiteNetworkQuotaKeyEnum;
    public constructor(quotaKey?: SiteNetworkQuotaKeyEnum) { 
        this['quota_key'] = quotaKey;
    }
    public withQuotaKey(quotaKey: SiteNetworkQuotaKeyEnum): SiteNetworkQuotaKey {
        this['quota_key'] = quotaKey;
        return this;
    }
    public set quotaKey(quotaKey: SiteNetworkQuotaKeyEnum  | undefined) {
        this['quota_key'] = quotaKey;
    }
    public get quotaKey(): SiteNetworkQuotaKeyEnum | undefined {
        return this['quota_key'];
    }
}