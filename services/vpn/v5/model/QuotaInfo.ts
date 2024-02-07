

export class QuotaInfo {
    public type?: string;
    public quota?: number;
    public used?: number;
    public constructor() { 
    }
    public withType(type: string): QuotaInfo {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): QuotaInfo {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): QuotaInfo {
        this['used'] = used;
        return this;
    }
}