

export class Quota {
    private 'quota_key'?: string;
    private 'quota_limit'?: number;
    public used?: number;
    public unit?: string;
    public constructor() { 
    }
    public withQuotaKey(quotaKey: string): Quota {
        this['quota_key'] = quotaKey;
        return this;
    }
    public set quotaKey(quotaKey: string  | undefined) {
        this['quota_key'] = quotaKey;
    }
    public get quotaKey(): string | undefined {
        return this['quota_key'];
    }
    public withQuotaLimit(quotaLimit: number): Quota {
        this['quota_limit'] = quotaLimit;
        return this;
    }
    public set quotaLimit(quotaLimit: number  | undefined) {
        this['quota_limit'] = quotaLimit;
    }
    public get quotaLimit(): number | undefined {
        return this['quota_limit'];
    }
    public withUsed(used: number): Quota {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): Quota {
        this['unit'] = unit;
        return this;
    }
}