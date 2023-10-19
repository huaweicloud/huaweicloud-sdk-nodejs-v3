import { CentralNetworkQuotaKey } from './CentralNetworkQuotaKey';
import { CentralNetworkQuotaKeyEnum } from './CentralNetworkQuotaKeyEnum';
import { QuotaLimit } from './QuotaLimit';
import { QuotaUnit } from './QuotaUnit';
import { QuotaUsed } from './QuotaUsed';


export class CentralNetworkQuota {
    private 'quota_key'?: CentralNetworkQuotaKeyEnum;
    private 'quota_limit'?: number;
    public used?: number;
    public unit?: string;
    public constructor(quotaKey?: CentralNetworkQuotaKeyEnum, quotaLimit?: number, used?: number, unit?: string) { 
        this['quota_key'] = quotaKey;
        this['quota_limit'] = quotaLimit;
        this['used'] = used;
        this['unit'] = unit;
    }
    public withQuotaKey(quotaKey: CentralNetworkQuotaKeyEnum): CentralNetworkQuota {
        this['quota_key'] = quotaKey;
        return this;
    }
    public set quotaKey(quotaKey: CentralNetworkQuotaKeyEnum  | undefined) {
        this['quota_key'] = quotaKey;
    }
    public get quotaKey(): CentralNetworkQuotaKeyEnum | undefined {
        return this['quota_key'];
    }
    public withQuotaLimit(quotaLimit: number): CentralNetworkQuota {
        this['quota_limit'] = quotaLimit;
        return this;
    }
    public set quotaLimit(quotaLimit: number  | undefined) {
        this['quota_limit'] = quotaLimit;
    }
    public get quotaLimit(): number | undefined {
        return this['quota_limit'];
    }
    public withUsed(used: number): CentralNetworkQuota {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): CentralNetworkQuota {
        this['unit'] = unit;
        return this;
    }
}