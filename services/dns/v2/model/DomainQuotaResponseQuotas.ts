

export class DomainQuotaResponseQuotas {
    private 'quota_key'?: string;
    private 'quota_limit'?: number;
    public used?: number;
    public unit?: string;
    public constructor(quotaKey?: string, quotaLimit?: number, used?: number, unit?: string) { 
        this['quota_key'] = quotaKey;
        this['quota_limit'] = quotaLimit;
        this['used'] = used;
        this['unit'] = unit;
    }
    public withQuotaKey(quotaKey: string): DomainQuotaResponseQuotas {
        this['quota_key'] = quotaKey;
        return this;
    }
    public set quotaKey(quotaKey: string  | undefined) {
        this['quota_key'] = quotaKey;
    }
    public get quotaKey(): string | undefined {
        return this['quota_key'];
    }
    public withQuotaLimit(quotaLimit: number): DomainQuotaResponseQuotas {
        this['quota_limit'] = quotaLimit;
        return this;
    }
    public set quotaLimit(quotaLimit: number  | undefined) {
        this['quota_limit'] = quotaLimit;
    }
    public get quotaLimit(): number | undefined {
        return this['quota_limit'];
    }
    public withUsed(used: number): DomainQuotaResponseQuotas {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): DomainQuotaResponseQuotas {
        this['unit'] = unit;
        return this;
    }
}