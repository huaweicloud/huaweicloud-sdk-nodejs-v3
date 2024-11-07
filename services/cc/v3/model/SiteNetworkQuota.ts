import { QuotaLimit } from './QuotaLimit';
import { QuotaUnit } from './QuotaUnit';
import { QuotaUsed } from './QuotaUsed';
import { SiteNetworkQuotaKey } from './SiteNetworkQuotaKey';
import { SiteNetworkQuotaKeyEnum } from './SiteNetworkQuotaKeyEnum';


export class SiteNetworkQuota {
    private 'quota_key'?: SiteNetworkQuotaKeyEnum;
    private 'quota_limit'?: number;
    public used?: number;
    public unit?: string;
    public constructor(quotaKey?: SiteNetworkQuotaKeyEnum, quotaLimit?: number, used?: number, unit?: string) { 
        this['quota_key'] = quotaKey;
        this['quota_limit'] = quotaLimit;
        this['used'] = used;
        this['unit'] = unit;
    }
    public withQuotaKey(quotaKey: SiteNetworkQuotaKeyEnum): SiteNetworkQuota {
        this['quota_key'] = quotaKey;
        return this;
    }
    public set quotaKey(quotaKey: SiteNetworkQuotaKeyEnum  | undefined) {
        this['quota_key'] = quotaKey;
    }
    public get quotaKey(): SiteNetworkQuotaKeyEnum | undefined {
        return this['quota_key'];
    }
    public withQuotaLimit(quotaLimit: number): SiteNetworkQuota {
        this['quota_limit'] = quotaLimit;
        return this;
    }
    public set quotaLimit(quotaLimit: number  | undefined) {
        this['quota_limit'] = quotaLimit;
    }
    public get quotaLimit(): number | undefined {
        return this['quota_limit'];
    }
    public withUsed(used: number): SiteNetworkQuota {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): SiteNetworkQuota {
        this['unit'] = unit;
        return this;
    }
}