

export class ShowQuota {
    private 'quota_limit'?: number;
    private 'quota_key'?: string;
    public unit?: string;
    public used?: number;
    public constructor(quotaLimit?: number, quotaKey?: string, unit?: string, used?: number) { 
        this['quota_limit'] = quotaLimit;
        this['quota_key'] = quotaKey;
        this['unit'] = unit;
        this['used'] = used;
    }
    public withQuotaLimit(quotaLimit: number): ShowQuota {
        this['quota_limit'] = quotaLimit;
        return this;
    }
    public set quotaLimit(quotaLimit: number  | undefined) {
        this['quota_limit'] = quotaLimit;
    }
    public get quotaLimit(): number | undefined {
        return this['quota_limit'];
    }
    public withQuotaKey(quotaKey: string): ShowQuota {
        this['quota_key'] = quotaKey;
        return this;
    }
    public set quotaKey(quotaKey: string  | undefined) {
        this['quota_key'] = quotaKey;
    }
    public get quotaKey(): string | undefined {
        return this['quota_key'];
    }
    public withUnit(unit: string): ShowQuota {
        this['unit'] = unit;
        return this;
    }
    public withUsed(used: number): ShowQuota {
        this['used'] = used;
        return this;
    }
}