

export class QuotaDetail {
    public type?: string;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withType(type: string): QuotaDetail {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): QuotaDetail {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): QuotaDetail {
        this['used'] = used;
        return this;
    }
}