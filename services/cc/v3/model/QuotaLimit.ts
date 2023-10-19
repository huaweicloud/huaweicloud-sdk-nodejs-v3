

export class QuotaLimit {
    private 'quota_limit'?: number;
    public constructor(quotaLimit?: number) { 
        this['quota_limit'] = quotaLimit;
    }
    public withQuotaLimit(quotaLimit: number): QuotaLimit {
        this['quota_limit'] = quotaLimit;
        return this;
    }
    public set quotaLimit(quotaLimit: number  | undefined) {
        this['quota_limit'] = quotaLimit;
    }
    public get quotaLimit(): number | undefined {
        return this['quota_limit'];
    }
}