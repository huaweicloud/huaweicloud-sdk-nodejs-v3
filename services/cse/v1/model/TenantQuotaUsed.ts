

export class TenantQuotaUsed {
    public type?: string;
    public used?: number;
    public quota?: number;
    public constructor() { 
    }
    public withType(type: string): TenantQuotaUsed {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): TenantQuotaUsed {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): TenantQuotaUsed {
        this['quota'] = quota;
        return this;
    }
}