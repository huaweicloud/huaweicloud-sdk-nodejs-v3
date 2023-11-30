

export class QuotaRespQuotasResources {
    public type?: string;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withType(type: string): QuotaRespQuotasResources {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): QuotaRespQuotasResources {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): QuotaRespQuotasResources {
        this['used'] = used;
        return this;
    }
}